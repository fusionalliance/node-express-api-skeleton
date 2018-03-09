const routes = require('../routes');

function unmatchedRouteHandler(request, response, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}

function configure(app) {
  app.use('/api/', routes);
  app.use(unmatchedRouteHandler);
}

module.exports = configure;
