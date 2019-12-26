'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const {
  createProductController, getProductController,
} = require('../controllers/product/index');

const {
  checkAccountSession,
} = require('../controllers/account/index');

router.post('/', checkAccountSession, upload.single('photo'), createProductController);
router.get('/', checkAccountSession, getProductController);


module.exports = router;