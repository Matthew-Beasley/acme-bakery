import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Recipes = () => {
  return (
    <h3>Recipes placeholder</h3>
  )
}


const Chefs = (chefs, setChefs) => {
  const [chef, setChef] = useState('');

  return (
    <div>
      <h2>Chefs</h2>
      <ul>
        {chefs.map(cook => {
          return (
            <li key={cook.id}>{cook.name}</li>
          )
        })}
      </ul>
    </div>
  )
}


const App = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    axios.get('/api/chefs')
      .then(response => setChefs(response))
  }, []);

  return (
    <div>
      <h1>Acme Bakery</h1>
      <Chefs chefs={chefs} setChefs={setChefs} />
      <Recipes />
    </div>
  )
}

export default App;
