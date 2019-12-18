'use strict';

const router = require('express').Router();
const checkAccountSession = require('../controllers/account/check-account-session');
const getProfileData = require('../controllers/editProfile/get-profile-data');
const updateProfile = require('../controllers/editProfile/update-profile');

router.get('/', checkAccountSession, getProfileData);
router.put('/', checkAccountSession, updateProfile);

module.exports = router;