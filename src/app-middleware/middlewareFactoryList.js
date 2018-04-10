'use strict';

module.exports = [
  /* eslint-disable global-require */
  require('./bodyParserJsonFactory'),
  require('./bodyParserUrlEncodeFactory'),
  require('./compressionFactory'),
  require('./swaggerFactory'),
  require('./corsFactory'),

  // Configure routes after other middleware
  require('./routesFactory'),
  require('./unmatchedRouteHandlerFactory'),

  // Make sure configureErrorHandler is LAST!!!
  require('./errorHandlerFactory'),
];
