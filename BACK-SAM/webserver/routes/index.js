'use strict';

const account = require('./account-router');
const auth = require('./auth-router');
const product = require('./product-router');

module.exports = {
  account,
  auth,
  product,
};
