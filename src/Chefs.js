import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
    const response = await axios.delete(`/api/chefs/${cook.id}`);
    setChefs(chefs.filter(item => item.id !== response.data.id));
  }


  return (
    <div id="chef-container">
      <div className="section-title"><h2>Chefs ({chefs.length})</h2></div>
      <ul className="outer-list">
        {chefs.map(cook => {
          return (
            <li key={cook.id}>
              <Link to={`/updatechef/${cook.id}`}>{cook.name}</Link>
              <button className="del-button" type="button" onClick={() => deleteChef(cook)}>Delete</button>
              <ul className="inner-list">
                {recipes.filter(dish => dish.chefId === cook.id).map(dish => {
                  return (
                    <li className="chef-inner-li" key={dish.id}>
                      {dish.name}
                      <button className="del-button" type="button" onClick={() => deleteDish(dish)}>Delete</button>
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
          <input type="text" placeholder="Chef Name" value={chef} onChange={(ev) => setChef(ev.target.value)} />
          <button type="submit" onClick={() => createChef(chef)}>Create</button>
        </form>
      </div>
    </div>
  )
}

export default Chefs;
