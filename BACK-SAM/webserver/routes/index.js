'use strict';

const account = require('./account-router');
const auth = require('./auth-router');
const ordersHistory = require('./ordersHistory-router')

module.exports = {
  account,
  auth,
  ordersHistory,
};
