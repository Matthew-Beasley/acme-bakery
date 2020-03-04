const express = require('express');
const path = require('path');
const { sync } = require('./datalayer/setup');
const { apiRouter } = require('./api/index');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/api', apiRouter);

app.get('/', (req, res, next) => {
  try {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
  } catch (error) {
    next(error);
  }
})

//sync();
app.listen(PORT, () => console.log('Listening on PORT ', PORT));
