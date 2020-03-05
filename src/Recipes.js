import React, { useState } from 'react';
import Axios from 'axios';

const Recipes = ({ chefs, setRecipes, recipes }) => {
  const [recipe, setRecipe] = useState('');
  const [chef, setChef] = useState('');

  const createRecipe = async () => {
    const response = await Axios.post('/api/recipes', { name: recipe, chefId: chef });
    setRecipes([...recipes, response.data]);
  }

  return (
    <div id="recipe-container">
      <h2>Recipes</h2>
      <ul>
        {recipes.map(dish => {
          return (
            <li key={dish.id}>
              {dish.name}
              <ul>
                {chefs.filter(cook => cook.id === dish.chefId).map(chef => {  
                  return (
                    <li key={chef.id}>{chef.name}</li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      <form onSubmit={ev => ev.preventDefault()}>
        <input type="text" placeholder="Enter recipe name" value={recipe} onChange={ev => setRecipe(ev.target.value)} />
        <select placeholder="Choose chef" onChange={ev => setChef(ev.target.value)}>
          {chefs.map(cook => {
            return (
              <option key={cook.id} value={cook.id}>{cook.name}</option>
            )
          })}
        </select>
        <button type="button" onClick={() => createRecipe()}>Create</button>
      </form>
    </div>
  )
}

export default Recipes;