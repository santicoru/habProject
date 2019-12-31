"use strict";

const account = require("./account-router");
const auth = require("./auth-router");
const product = require("./product-router");
const catalogue = require("./catalogue-router");

module.exports = {
  account,
  auth,
  product,
  catalogue
};
