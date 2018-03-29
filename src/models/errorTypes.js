'use strict';

/*
Usage example:

reject({
  message: `Login failed for username '${username}'.`,
  errorType: errorTypes.loginFailed
});
*/

module.exports = {
  badRequest: Symbol.for('bad request'),
  loginFailed: Symbol.for('login failed'),
  notFound: Symbol.for('not found'),
};
