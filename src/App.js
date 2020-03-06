import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import MainView from './MainView';
import UpdateChef from './UpdateChef';
import UpdateRecipe from './UpdateRecipe';


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
      <Route exact path="/" render={() => <MainView chefs={chefs} setChefs={setChefs} recipes={recipes} setRecipes={setRecipes} />} />
      <Route path="/updatechef/:id" render={props => <UpdateChef chefs={chefs} setChefs={setChefs} {...props} />} />
      <Route path="/updaterecipe/:id" render={props => <UpdateRecipe recipes={recipes} setRecipes={setRecipes} chefs={chefs} setChefs={setChefs} {...props} />} />
    </div>
  )
}

export default App;
