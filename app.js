const path = require('path');
const app = require('./server/server.js');
const express = require('express');

app.use(express.json());

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js'))
);

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, './index.html'))
);

app.use('/api', require('./server/api'));

app.use((error, req, res, next) => {
  res.status(error.status || 500).send(error);
});
