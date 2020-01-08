'use strict';

const deleteAccountController = require('./delete-account-controller');
const getAccountController = require('./get-account-controller');
const accountModifController = {
    deleteAccountController,
    getAccountController,
};

module.exports = accountModifController;