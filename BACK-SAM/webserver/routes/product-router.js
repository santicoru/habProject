'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const {
  createProductController,
} = require('../controllers/product/index');

const {
  checkAccountSession,
} = require('../controllers/account/index');

router.post('/', checkAccountSession, upload.single('photo'), createProductController);

module.exports = router;