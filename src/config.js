'use strict';

const cfg = require('12factor-config');

const config = cfg({
  allowedOrigins: {
    env: 'ALLOWED_ORIGINS',
    type: 'string',
    required: true,
  },
  allowedHeaders: {
    env: 'ALLOWED_HEADERS',
    type: 'string',
    required: true,
  },
  appName: {
    env: 'APP_NAME',
    type: 'string',
    required: true,
  },
  desiredPort: {
    env: 'PORT',
    type: 'integer',
    required: true,
  },
  debug: {
    env: 'DEBUG',
    type: 'string',
  },
  nodeEnv: {
    env: 'NODE_ENV',
    type: 'enum',
    values: ['development', 'production'],
  },
});

module.exports = config;
