'use strict';

const compression = require('compression');

function configure(app) {
  app.use(compression());
}

module.exports = configure;
