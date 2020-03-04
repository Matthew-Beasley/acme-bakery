import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Chefs = ({ chefs, recipes }) => {

  return (
    <div id="chef-container">
      <h2>chefs</h2>
      <ul>
        {chefs.map(chef => {
        return (
          <li key={chef.id}>
            {chef.name}
            <ul>
              {recipes.filter(dish => dish.chefId === chef.id).map(dish => {
                return (
                  <li key={dish.id}>{dish.name}</li>
                )
              })}
            </ul>
          </li>
        )
      })}
      </ul>
    </div>
  )
}


const Recipes = ({ chefs, recipes }) => {
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
    </div>
  )
}


const App = () => {
  const [chefs, setChefs] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/api/chefs'),
      axios.get('/api/recipes')
    ])
      .then(values => {
        setChefs(values[0].data);
        setRecipes(values[1].data);
      })
  }, []);

  return (
    <div>
      <h1>Acme Bakery</h1>
      <Chefs chefs={chefs} recipes={recipes} />
      <Recipes chefs={chefs} recipes={recipes} />
    </div>
  )
}

export default App;
