const express = require('express');
const { chefsRouter } = require('./chefs');
const { recipesRouter } = require('./recipes');

const apiRouter = express.Router();

apiRouter.use('/chefs', chefsRouter);
apiRouter.use('/recipes', recipesRouter);

module.exports = { apiRouter };
