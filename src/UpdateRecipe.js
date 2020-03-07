import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const UpdateRecipe = (props) => {

  const { chefs, recipes, setRecipes, history } = props;
  const { id } = props.match.params;

  const [recipe, setRecipe] = useState('');
  const [chef, setChef] = useState('');


  useEffect(() => {

    const startRecipe = recipes.reduce((acc, item) => {
      if (item.id === id) {
        acc = item;
      }
      return acc;
    }, {});
    setRecipe(startRecipe.name);

    const startChef = chefs.reduce((acc, item) => {
      if (item.id === startRecipe.chefId) {
        acc = item;
      }
      return acc;
    }, {});
    setChef(startChef.name);

  }, []);


  const editRecipe = async () => {
    const chefId = chefs.reduce((acc, item) => {
      if (item.name === chef) {
        acc = item.id;
      }
      return acc;
    }, '');
    const response = await axios.put('/api/recipes', { chefId, name: recipe, id });
    const mapped = recipes.map(item => {
      if (item.id === id) {
        item.name = response.data.name;
        item.chefId = response.data.chefId;
      }
      return item;
    });
    setRecipes(mapped);
    setRecipe('');
    history.push('/');
  }

    return (
      <div className="update-container">
        <Link to="/"><h3>Home</h3></Link>
        <div className="update-header"><h1>Edit Recipe</h1></div>
        <form onSubmit={ev => ev.preventDefault()}>
          <input type="text" value={recipe} onChange={ev => setRecipe(ev.target.value)} />
          <select onChange={ev => setChef(ev.target.value)}>
            <option key="default" value="">choose chef</option>
            {chefs.map(cook => {
              return (
                <option key={cook.id} value={cook.name}>{cook.name}</option>
              )
            })}
          </select>
          <button type="button" onClick={() => editRecipe()}>Update</button>
        </form>

      </div>

    )
  }

export default UpdateRecipe;
