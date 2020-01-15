'use strict';

const router = require('express').Router();

const checkAccountSession = require('../controllers/account/check-account-sesion');
const {
    createPackageController,
    getCodePackController,
    getPackController,
    editPackController,
} = require('../controllers/packageP');

router.post('/', checkAccountSession, createPackageController);
router.get('/:code', getCodePackController);
router.get('/', checkAccountSession, getPackController);
router.put('/:idProductPack', checkAccountSession, editPackController);

module.exports = router;

