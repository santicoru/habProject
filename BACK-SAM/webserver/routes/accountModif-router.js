'use strict';

const express = require('express');
const router = express.Router();
const {
    deleteAccountController,
    getAccountController
} = require('../controllers/accountModif');
const {
    checkAccountSession,
} = require('../controllers/account/index');

router.delete('/', checkAccountSession, deleteAccountController);

module.exports = router;
