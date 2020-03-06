const {
  createChefs,
  readChefs,
  updateChefs,
  deleteChefs
} = require('./chefs');

const {
  createRecipes,
  readRecipes,
  updateRecipes,
  deleteRecipes
} = require('./recipes');


module.exports = {
  createChefs,
  readChefs,
  updateChefs,
  deleteChefs,

  createRecipes,
  readRecipes,
  updateRecipes,
  deleteRecipes
};
