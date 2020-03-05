import React, { useState } from 'react'
import axios from 'axios';

const Chefs = ({ chefs, setChefs, recipes, setRecipes }) => {
  const [chef, setChef] = useState('');

  const createChef = async (name) => {
    const cook = await axios.post('/api/chefs', { name });
    setChefs([...chefs, cook.data]);
    setChef('');
  }


  const deleteDish = async (dish) => {
    const response = await axios.delete(`/api/recipes/${dish.id}`);
    setRecipes(recipes.filter(item => item.id !== response.data.id));
  }


  const deleteChef = async (cook) => {
    console.log(cook)
    const response = await axios.delete(`/api/chefs/${cook.id}`);
    setChefs(chefs.filter(item => item.id !== response.data.id));
  }


  return (
    <div id="chef-container">
      <h2>chefs</h2>
      <ul>
        {chefs.map(cook => {
          return (
            <li key={cook.id}>
              {cook.name}
              <ul>
                {recipes.filter(dish => dish.chefId === cook.id).map(dish => {
                  return (
                    <li key={dish.id}>
                      <div className="dish-name">{dish.name}</div>
                      <button type="button" onClick={() => deleteDish(dish)}>Delete</button>
                    </li>
                  )
                })}
              </ul>
              <button type="button" onClick={() => deleteChef(cook)}>Delete</button>
            </li>
          )
        })}
      </ul>
      <form onSubmit={ev => ev.preventDefault()}>
        <input type="text" placeholder="Chef Name" value={chef} onChange={(ev) => setChef(ev.target.value)} />
        <button type="submit" onClick={() => createChef(chef)}>Create</button>
      </form>
    </div>
  )
}

export default Chefs;
