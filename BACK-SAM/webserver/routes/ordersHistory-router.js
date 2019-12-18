'use strict';

const router = require('express').Router();
const checkAccountSession = require('../controllers/account/check-account-session');
const getOrder = require('../controllers/ordersHistory/get-order');
const getOrders = require('../controllers/ordersHistory/get-orders');
const updateOrder = require('../controllers/ordersHistory/update-orders');

router.get('/', checkAccountSession, getOrders);
router.get('/:id', checkAccountSession, getOrder);
router.post('/', checkAccountSession, updateOrder);

module.exports = router;