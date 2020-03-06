const express = require('express');
const {
  createRecipes,
  readRecipes,
  updateRecipes,
  deleteRecipes
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


recipesRouter.put('/', async (req, res, next) => {
  const { chefId, name, id } = req.body;
  try {
    const data = await updateRecipes(chefId, name, id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


recipesRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await deleteRecipes(id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { recipesRouter };
