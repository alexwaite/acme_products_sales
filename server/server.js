const express = require('express');
const app = express();

const { syncAndSeed } = require('./db');

const port = process.env.PORT || 3000;

syncAndSeed().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`));
});

module.exports = app;
