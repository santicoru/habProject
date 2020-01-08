"use strict";

const account = require("./account-router");
const accountModif = require('./accountModif-router');
const auth = require("./auth-router");
const product = require("./product-router");
const catalogue = require("./catalogue-router");
const ordersHistory = require('./ordersHistory-router');
const orderFinal = require('./orderFinal-router');

module.exports = {
  account,
  accountModif,
  auth,
  ordersHistory,
  product,
  catalogue,
  orderFinal,
};
