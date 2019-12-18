/*
'use strict';

const router = require('express').Router();
const checkAccountSession = require('../controllers/account/check-account-session');
const createShoppingCart = require('../controllers/shoppingCart/createShoppingCart');
const deleteProduct = require('../controllers/shoppingCart/deleteProduct');
const getAvailableProduct = require('../controllers/shoppingCart/getAvailableProduct');
const getShoppingCart = require('../controllers/shoppingCart/getShoppingCart');
const insertProduct = require('../controllers/shoppingCart/insertProduct');
const updateShoppingCart = require('../controllers/shoppingCart/updateShoppingCart');

router.post('/', checkAccountSession, createShoppingCart);
router.delete('/', checkAccountSession, deleteProduct);
router.get('/', checkAccountSession, getAvailableProduct);
router.get('/', checkAccountSession, getShoppingCart);
router.put('/', checkAccountSession, insertProduct);
router.put('/', checkAccountSession, updateShoppingCart);

module.exports = router;
*/