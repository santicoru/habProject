'use strict';

const router = require('express').Router();
const showCatalogueFilter = require('../controllers/filters/show-catalogue-filter-controller');

router.get('/', showCatalogueFilter);
module.exports = router;