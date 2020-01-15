'use strict';

const deleteAccountController = require('./delete-account-controller');
const editAccountController = require('./edit-account-controller');
const accountModifController = {
    deleteAccountController,
    editAccountController,
};

module.exports = accountModifController;