import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipes = ({ chefs, setRecipes, recipes }) => {
  const [recipe, setRecipe] = useState('');
  const [chef, setChef] = useState('');


  const createRecipe = async () => {
    const response = await axios.post('/api/recipes', { name: recipe, chefId: chef });
    setRecipes([...recipes, response.data]);
    setRecipe('')
  }


  const deleteRecipe = async (dish) => {
    const response = await axios.delete(`/api/recipes/${dish.id}`);
    setRecipes(
      recipes.filter(item => item.id !== response.data.id)
    );
  }


  return (
    <div id="recipe-container">
      <div className="section-title"><h2>Recipes ({recipes.length})</h2></div>
      <ul className="outer-list">
        {recipes.map(dish => {
          return (
            <li key={dish.id}>
              <Link to={`/updaterecipe/${dish.id}`}>{dish.name}</Link>
              <button className="del-button" type="button" onClick={() => deleteRecipe(dish)}>Delete</button>
              <ul className="inner-list">
                {chefs.filter(cook => cook.id === dish.chefId).map(cook => {
                  return (
                    <li key={cook.id}>
                     by {cook.name}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>

      <div className="form-container">
        <form onSubmit={ev => ev.preventDefault()}>
          <input type="text" placeholder="Enter recipe name" value={recipe} onChange={ev => setRecipe(ev.target.value)} />
          <select placeholder="Choose chef" onChange={ev => setChef(ev.target.value)}>
            <option key="default" value="">choose chef</option>
            {chefs.map(cook => {
              return (
                <option key={cook.id} value={cook.id}>{cook.name}</option>
              )
            })}
          </select>
          <button type="submit" disabled={recipe === ''} onClick={() => createRecipe()}>Create</button>
        </form>
      </div>
    </div>
  )
}

export default Recipes;
