import React from 'react';
import Recipes from './Recipes';
import Chefs from './Chefs';

const MainView = ({ chefs, recipes }) => {
  return (
    <div id="mainview-wrapper">
      <Chefs chefs={chefs} recipes={recipes} />
      <Recipes chefs={chefs} recipes={recipes} />
    </div>
  )
}

export default MainView;