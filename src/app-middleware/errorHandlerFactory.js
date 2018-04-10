'use strict';

const errorTypes = require('../models/errorTypes');
const logFunctionFactory = require('../services/logFunctionFactory');

const writeError = logFunctionFactory.getErrorLogger('errorHandler');

function errorHandler(err, req, res, next) {
  /* eslint-disable consistent-return */
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
}

module.exports = function errorHandlerFactory() {
  return errorHandler();
};
