const express = require('express');
const {
  createChefs,
  readChefs
} = require('../datalayer/index');

const chefsRouter = express.Router();

chefsRouter.post('/', async (req, res, next) => {
  const { chef_name } = req.body;
  try {
    const data = await createChefs(chef_name);
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

module.exports = { chefsRouter };