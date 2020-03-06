const express = require('express');
const {
  createChefs,
  readChefs,
  updateChefs,
  deleteChefs
} = require('../datalayer/index');

const chefsRouter = express.Router();

chefsRouter.post('/', async (req, res, next) => {
  const { name } = req.body;
  try {
    const data = await createChefs(name);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


chefsRouter.get('/', async (req, res, next) => {
  try {
    const data = await readChefs();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


chefsRouter.put('/', async (req, res, next) => {
  const { name, id } = req.body;
  try {
    const data = await updateChefs(name, id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


chefsRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await deleteChefs(id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { chefsRouter };
