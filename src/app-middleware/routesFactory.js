'use strict';

const routes = require('../routes');

function configure(app) {
  app.use('/api/', routes);
}

module.exports = function routesFactory() {
  return {'/api', routes};
};
