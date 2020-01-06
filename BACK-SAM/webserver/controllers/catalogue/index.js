"use strict";

const showCatalogueController = require("./show-catalogue-controller");
const showProductController = require('./show-product-controller');
const catalogueController = {
  showCatalogueController,
  showProductController,
};

module.exports = catalogueController;
