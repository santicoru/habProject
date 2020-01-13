'use strict';

const createPackageController = require('./create-package');
const getCodePackController = require('./get-code-pack');
const packageController = {
    createPackageController,
    getCodePackController
};

module.exports = packageController;