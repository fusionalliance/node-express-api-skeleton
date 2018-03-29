'use strict';

const errorTypes = require('../src/models/errorTypes');
const logFunctionFactory = require('../src/services/logFunctionFactory');

const writeError = logFunctionFactory.getErrorLogger('errorHandler');

function configure(app) {
  /* eslint-disable consistent-return */
  app.use((err, req, res, next) => {
    writeError('Error:', err);
    if (res.headersSent) {
      next(err);
    } else if (err.errorType === errorTypes.badRequest) {
      res
        .status(400)
        .json({ message: err.message });
    } else if (err.errorType === errorTypes.notFound) {
      res
        .status(404)
        .json({ message: err.message });
    } else if (err.errorType === errorTypes.loginFailed) {
      res
        .status(401)
        .json({ message: 'The username or password was invalid.' });
    } else {
      next(err);
    }
  });
}

module.exports = configure;
