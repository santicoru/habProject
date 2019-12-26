'use strict';

const createProductController = require('./create-product-controller');
const getProductController = require('./get-product-controller');
const deleteProductController = require('./delete-product-controller');
const editProductController = require('./edit-product-controller');

const productController = {
    createProductController,
    getProductController,
    deleteProductController,
    editProductController,
};

module.exports = productController;