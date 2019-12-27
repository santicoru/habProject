'use strict';

const router = require('express').Router();
const checkAccountSession = require('../controllers/account/check-account-sesion');
const getOrder = require('../controllers/ordersHistory/get-order');

router.get('/', checkAccountSession, getOrder);

module.exports = router;