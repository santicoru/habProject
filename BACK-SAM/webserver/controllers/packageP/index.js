'use strict';

const createPackageController = require('./create-package');
const getCodePackController = require('./get-code-pack');
const getPackController = require('./get-pack');
const editPackController = require('./edit-package');
const packageController = {
    createPackageController,
    getCodePackController,
    getPackController,
    editPackController,
};

module.exports = packageController;