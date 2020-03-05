import React, { useState } from 'react'
import axios from 'axios';

const Chefs = ({ chefs, setChefs, recipes }) => {
  const [chef, setChef] = useState('');

  const createChef = async (name) => {
    console.log(name)
    const cook = await axios.post('/api/chefs', { name });
    console.log(cook.data)
    setChefs([...chefs, cook.data]);
    setChef('');
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
                    <li key={dish.id}>{dish.name}</li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      <form onSubmit={ev => ev.preventDefault()}>
        <label >Name</label>
        <input type="text" value={chef} onChange={(ev) => setChef(ev.target.value)} />
        <button type="submit" onClick={() => createChef(chef)}>Create</button>
      </form>
    </div>
  )
}

export default Chefs;
