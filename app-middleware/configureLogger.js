const logger = require('morgan');

function configure(app) {
  app.use(logger('combined'));
}

module.exports = configure;
