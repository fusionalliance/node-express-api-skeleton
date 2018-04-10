'use strict';

const cfg = require('12factor-config');

const config = cfg({
  allowedOrigins: {
    env: 'ALLOWED_ORIGINS',
    type: 'string',
  },
  allowedHeaders: {
    env: 'ALLOWED_HEADERS',
    type: 'string',
  },
  appName: {
    env: 'APP_NAME',
    type: 'string',
    required: true,
  },
  desiredPort: {
    env: 'PORT',
    type: 'integer',
    default: '3000',
    required: true,
  },
  debug: {
    env: 'DEBUG',
    type: 'string',
  },
  topSecret: {
    env: 'TOP_SECRET',
    type: 'string',
    required: true,
  },
});

module.exports = config;
