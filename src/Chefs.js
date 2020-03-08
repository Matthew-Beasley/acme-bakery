/* eslint-disable no-catch-shadow */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Chefs = ({ chefs, setChefs, recipes, setRecipes }) => {
  const [chef, setChef] = useState('');
  const [error, setError] = useState('');

  const createChef = async (name) => {
    try {
      const cook = await axios.post('/api/chefs', { name });
      setChefs([...chefs, cook.data]);
      setChef('');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }


  const deleteDish = async (dish) => {
    try {
      const response = await axios.delete(`/api/recipes/${dish.id}`);
      setRecipes(recipes.filter(item => item.id !== response.data.id));
      setError('');
    } catch (err) {
      setError(err.response.data.message);
    }
  }


  const deleteChef = async (cook) => {
    try {
      const response = await axios.delete(`/api/chefs/${cook.id}`);
      const rows = await axios.get('/api/recipes');
      setRecipes(rows.data);
      setChefs(chefs.filter(item => item.id !== response.data.id));
      setError('');
    } catch (err) {
      setError(err.response.data.message);
    }
  }


  return (
    <div id="chef-container">
      <div className="section-title"><h2>Chefs ({chefs.length})</h2></div>
      {!!error && <div className="error">{error}</div>}
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
          <button type="submit" disabled={chef === ''} onClick={() => createChef(chef)}>Create</button>
        </form>
      </div>
    </div>
  )
}

export default Chefs;
