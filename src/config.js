'use strict';

const cfg = require('12factor-config');

const config = cfg({
  allowedOrigins: {
    env: 'ALLOWED_ORIGINS',
    type: 'string',
    default: '*',
  },
  allowedHeaders: {
    env: 'ALLOWED_HEADERS',
    type: 'string',
    default: '*',
  },
  appName: {
    env: 'APP_NAME',
    type: 'string',
    default: 'fusion-node-express-api-skeleton',
  },
  desiredPort: {
    env: 'PORT',
    type: 'integer',
    default: '3000',
  },
  debug: {
    env: 'DEBUG',
    type: 'string',
    default: 'fusion-node-express-api-skeleton:*',
  },
  nodeEnv: {
    env: 'NODE_ENV',
    type: 'enum',
    values: ['development', 'test', 'stage', 'production'],
    default: 'development',
  },
});

module.exports = config;
