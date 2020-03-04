const express = require('express');
const {
  createRecipes,
  readRecipes
} = require('../datalayer/index');
const recipesRouter = express.Router();

recipesRouter.post('/', async (req, res, next) => {
  const { name, chefId } = req.body;
  try {
    const data = await createRecipes(name, chefId);
    res.status(200).send(data);
  } catch (error) {
    next(error)
  }
});


recipesRouter.get('/', async (req, res, next) => {
  try {
    const data = await readRecipes();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { recipesRouter };
