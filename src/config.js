'use strict';

const cfg = require('12factor-config');

const config = cfg({
  allowedHeaders: {
    env: 'ALLOWED_HEADERS',
    type: 'string',
    required: true,
  },
  allowedOrigins: {
    env: 'ALLOWED_ORIGINS',
    type: 'string',
    required: true,
  },
  appName: {
    env: 'APP_NAME',
    type: 'string',
    required: true,
  },
  debug: {
    env: 'DEBUG',
    type: 'string',
  },
  desiredPort: {
    env: 'PORT',
    type: 'integer',
    required: true,
  },
});

module.exports = config;
