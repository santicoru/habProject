'use strict';

const router = require('express').Router();

const checkAccountSession = require('../controllers/account/check-account-sesion');
const {
    createPackageController,
    getCodePackController,
} = require('../controllers/packageP');

router.post('/', checkAccountSession, createPackageController);
router.get('/:code', getCodePackController);

module.exports = router;

