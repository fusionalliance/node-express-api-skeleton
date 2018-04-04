'use strict';

function logStart(port, environment, logFunctionFactory) {
  /* eslint-disable global-require */
  const pkgJSON = require('../package.json');
  const writeInfo = logFunctionFactory.getInfoLogger('server');

  writeInfo(`Starting ${pkgJSON.name} on port ${port}, environment is ${environment}`);
}

module.exports = logStart;
