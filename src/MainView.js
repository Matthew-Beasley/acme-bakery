import React from 'react';
import Recipes from './Recipes';
import Chefs from './Chefs';

const MainView = ({ chefs, setChefs, recipes, setRecipes }) => {
  return (
    <div id="mainview-wrapper">
      <Chefs chefs={chefs} setChefs={setChefs} recipes={recipes} />
      <Recipes chefs={chefs} setRecipes={setRecipes} recipes={recipes} />
    </div>
  )
}

export default MainView;