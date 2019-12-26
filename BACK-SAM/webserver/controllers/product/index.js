'use strict';

const createProductController = require('./create-product-controller');
const getProductController = require('./get-product-controller');

const productController = {
    createProductController,
    getProductController,

};

module.exports = productController;