'use strict';

const config = require('../config');
const debug = require('debug');

/* eslint-disable no-console */
const factory = {
  getErrorLogger: (name) => {
    const logger = debug(`${config.appName}:${name}`);
    logger.log = console.error.bind(console);
    return logger;
  },
  getWarnLogger: (name) => {
    const logger = debug(`${config.appName}:${name}`);
    logger.log = console.warn.bind(console);
    return logger;
  },
  getInfoLogger: (name) => {
    const logger = debug(`${config.appName}:${name}`);
    logger.log = console.info.bind(console);
    return logger;
  },
  getDebugLogger: (name) => {
    const logger = debug(`${config.appName}:${name}`);
    logger.log = console.debug.bind(console);
    return logger;
  },
};

module.exports = factory;
