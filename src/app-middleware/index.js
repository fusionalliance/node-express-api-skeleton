'use strict';

function configure(app) {
  /* eslint-disable global-require */

  require('./bodyParserJsonFactory');
  require('./bodyParserUrlEncodeFactory');
  require('./compressionFactory');
  require('./swaggerFactory')(app);
  require('./corsFactory')(app);

  // Configure routes after other middleware
  require('./unmatchedRouteHandlerFactory');
  require('./routesFactory')(app);

  // Make sure configureErrorHandler is LAST!!!
  require('./errorHandlerFactory')(app);
}

module.exports.configure = configure;
