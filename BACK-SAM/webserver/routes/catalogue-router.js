"use strict";

const express = require("express");
const router = express.Router();

const showCatalogueController = require("../controllers/catalogue/index");
const showProductController = require("../controllers/catalogue/index");
router.get("/", showCatalogueController);
router.get("/:productId", showProductController);

module.exports = router;
