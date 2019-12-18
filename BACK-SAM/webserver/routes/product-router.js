'use strict';

const express = require('express');
const router = express.Router();

// const checkAccountSession = require('../controllers/account/check-account-sesion');
// const createProductController = require('../controllers/product/create-product-controller');
const {
    createProductController,
} = require('../controllers/product/index');

const {
    checkAccountSession,
} = require('../controllers/account/index');

router.post('/', checkAccountSession, createProductController);

module.exports = router;