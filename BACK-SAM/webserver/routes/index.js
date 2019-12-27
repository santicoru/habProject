'use strict';

const account = require('./account-router');
const auth = require('./auth-router');

const ordersHistory = require('./ordersHistory-router')
const product = require('./product-router');

module.exports = {
  account,
  auth,
  ordersHistory,
  product,
};
