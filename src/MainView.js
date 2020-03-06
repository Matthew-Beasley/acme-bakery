import React from 'react';
import Recipes from './Recipes';
import Chefs from './Chefs';

const MainView = ({ chefs, setChefs, recipes, setRecipes }) => {
  return (
    <div id="mainview-constainer">
      <Recipes chefs={chefs} setRecipes={setRecipes} recipes={recipes} />
      <Chefs chefs={chefs} setChefs={setChefs} recipes={recipes} setRecipes={setRecipes} />
    </div>
  )
}

export default MainView;
