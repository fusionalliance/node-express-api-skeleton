'use strict';

const { Router } = require('express');
const routes = require('../routes');

module.exports = function routesFactory() {
  return Router()
    .use('/api', routes);
};
