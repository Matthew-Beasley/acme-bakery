import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import MainView from './MainView';


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
    <div id="app-container">
      <h1>Acme Bakery</h1>
      <div id="routes">
        <MainView chefs={chefs} setChefs={setChefs} recipes={recipes} setRecipes={setRecipes} />
      </div>
    </div>
  )
}

export default App;
