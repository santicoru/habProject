"use strict";

<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
=======
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
>>>>>>> 3fae67743eb6bd5b27689d84cf95258e0be539ff

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

<<<<<<< HEAD
app.use("/api/account", routes.account);
app.use("/api/auth", routes.auth);
app.use("/api/product", routes.product);
app.use("/api/catalogue", routes.catalogue);
=======
app.use('/api/account', routes.account);
app.use('/api/auth', routes.auth);
app.use('/api/ordersHistory', routes.ordersHistory);
app.use('/api/product', routes.product);
>>>>>>> 3fae67743eb6bd5b27689d84cf95258e0be539ff

app.get("/", (req, res, next) => {
  res.send("base url: /api");
});

let server = null;

async function listen(port) {
  if (server === null) {
    server = await app.listen(port);
  } else {
    console.error("Can not listen, server already initialized");
  }
}

async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error("can not close a non started server");
  }
}

module.exports = {
  listen,
  close
};
