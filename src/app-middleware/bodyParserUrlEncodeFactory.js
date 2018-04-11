'use strict';

const bodyParser = require('body-parser');

module.exports = function bodyParserJsonFactory() {
  return bodyParser.urlencoded({ extended: false });
};
