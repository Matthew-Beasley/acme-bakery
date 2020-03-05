import React from 'react';

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

export default Recipes;