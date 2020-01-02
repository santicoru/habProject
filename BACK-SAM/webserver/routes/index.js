"use strict";

<<<<<<< HEAD
const account = require("./account-router");
const auth = require("./auth-router");
const product = require("./product-router");
const catalogue = require("./catalogue-router");
=======
const account = require('./account-router');
const auth = require('./auth-router');

const ordersHistory = require('./ordersHistory-router')
const product = require('./product-router');
>>>>>>> 3fae67743eb6bd5b27689d84cf95258e0be539ff

module.exports = {
  account,
  auth,
  ordersHistory,
  product,
  catalogue
};
