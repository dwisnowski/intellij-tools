'use strict';

var _shell = require('../shell');

module.exports = function () {
    (0, _shell.execute)('npm run-script bump');
};