'use strict';

const debug = require('debug');

/* eslint-disable no-console */
function factory({ appName }) {
  return {
    getErrorLogger: (name) => {
      const logger = debug(`${appName}:${name}`);
      logger.log = console.error.bind(console);
      return logger;
    },
    getWarnLogger: (name) => {
      const logger = debug(`${appName}:${name}`);
      logger.log = console.warn.bind(console);
      return logger;
    },
    getInfoLogger: (name) => {
      const logger = debug(`${appName}:${name}`);
      logger.log = console.info.bind(console);
      return logger;
    },
    getDebugLogger: (name) => {
      const logger = debug(`${appName}:${name}`);
      logger.log = console.log.bind(console);
      return logger;
    },
  };
}

module.exports = factory;
