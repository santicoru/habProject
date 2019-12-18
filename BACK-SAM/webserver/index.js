'use strict';

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/api/account', routes.account);
app.use('/api/auth', routes.auth);
app.use('/api/product', routes.product);

app.get('/', (req, res, next) => {
  res.send('base url: /api');
});

let server = null;

async function listen(port) {
  if (server === null) {
    server = await app.listen(port);
  } else {
    console.error('Can not listen, server already initialized');
  }
}

async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error('can not close a non started server');
  }
}

module.exports = {
  listen,
  close,
};