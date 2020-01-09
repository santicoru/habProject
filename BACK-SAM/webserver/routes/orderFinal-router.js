'use strict';

const router = require('express').Router();
const checkAccountSession = require('../controllers/account/check-account-sesion');
const orderFinalController = require('../controllers/order/orderFinal');

router.post('/', checkAccountSession, orderFinalController);

module.exports = router;