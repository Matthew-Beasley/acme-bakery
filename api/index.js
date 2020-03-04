const express = require('express');
const { chefsRouter } = require('./chefs');

const apiRouter = express.Router();

apiRouter.use('/chefs', chefsRouter);

module.exports = { apiRouter };