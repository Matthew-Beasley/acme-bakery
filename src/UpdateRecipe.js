import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UpdateRecipe = (props) => {

  const { chefs, recipes, setRecipes } = props;
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
  }


    return (
      <div id="ubdate-container">
        <div className="update-header"><h1>Edit Recipe</h1></div>
        <form onSubmit={ev => ev.preventDefault()}>
          <input type="text" value={recipe} onChange={ev => setRecipe(ev.target.value)} />
          <input type="text" value={chef} onChange={ev => setChef(ev.target.value)} />
          <button type="button" onClick={() => editRecipe()}>Update</button>
        </form>

      </div>

    )
  }

export default UpdateRecipe;
