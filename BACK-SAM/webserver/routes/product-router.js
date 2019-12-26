'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const {
  createProductController, getProductController, deleteProductController,
} = require('../controllers/product/index');

const {
  checkAccountSession,
} = require('../controllers/account/index');

router.post('/', checkAccountSession, upload.single('photo'), createProductController);
router.get('/', checkAccountSession, getProductController);
router.delete('/:productId', checkAccountSession, deleteProductController);

module.exports = router;