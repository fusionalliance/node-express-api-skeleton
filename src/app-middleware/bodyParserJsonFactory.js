'use strict';

const bodyParser = require('body-parser');

module.exports = function bodyParserJsonFactory() {
  return bodyParser.json();
};
