import React from 'react'

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

export default Chefs;
