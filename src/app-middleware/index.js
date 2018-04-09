'use strict';

function configure(app) {
  /* eslint-disable global-require */

  require('./configureBodyParser')(app);
  require('./configureCompression')(app);
  require('./configureSwagger')(app);
  require('./configureCors')(app);

  // Routes should immediately precede Error Handlers
  require('./configureRoutes')(app);

  // Make sure configureErrorHandler is LAST!!!
  require('./configureErrorHandler')(app);
}

module.exports.configure = configure;
