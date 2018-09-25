'use strict';

const errorTypes = require('../models/errorTypes');
const logFunctionFactory = require('../services/logFunctionFactory');

module.exports = function errorHandlerFactory() {
  const writeError = logFunctionFactory.getErrorLogger('errorHandler');

  return (err, req, res, next) => {
    writeError('In custom error handler:', err);
    if (res.headersSent) {
      next(err);
    } else if (err.status === 400 || (err.errorType === errorTypes.badRequest)) {
      res
        .status(400)
        .json({ message: err.message });
    } else if (err.status === 401 || (err.errorType === errorTypes.loginFailed)) {
      res
        .status(401)
        .json({ message: 'The username or password was invalid.' });
    } else if (err.status === 404 || (err.errorType === errorTypes.notFound)) {
      res
        .status(404)
        .json({ message: err.message });
    } else {
      next(err);
    }
  };
};
