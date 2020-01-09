'use strict';

const router = require('express').Router();
const checkAccountSession = require('../controllers/account/check-account-sesion');
const createRateProduct = require('../controllers/rateProduct/rateProduct');

router.post('/:productId', checkAccountSession, createRateProduct);

module.exports = router;