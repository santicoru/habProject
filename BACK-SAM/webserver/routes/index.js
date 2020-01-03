"use strict";

const account = require("./account-router");
const auth = require("./auth-router");
const product = require("./product-router");
const catalogue = require("./catalogue-router");
const ordersHistory = require('./ordersHistory-router')


module.exports = {
  account,
  auth,
  ordersHistory,
  product,
  catalogue
};
