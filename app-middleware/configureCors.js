'use strict';

const cors = require('cors');
const config = require('../src/config');

function parseOrigins(allowedOrigins) {
  let origins = allowedOrigins;
  if (allowedOrigins.indexOf(',') > -1) {
    origins = allowedOrigins.split(',');
  }
  return origins;
}

function configure(app) {
  const allowedOrigins = parseOrigins(config.allowedOrigins);
  app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'hostsuffix', 'Content-Disposition'],
    preflightContinue: true,
  }));
}

module.exports = configure;
