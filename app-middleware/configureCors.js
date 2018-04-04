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

function parseHeaders(allowedHeaders) {
  let headers = allowedHeaders;
  if (allowedHeaders.indexOf(',') > -1) {
    headers = allowedHeaders.split(',');
  }
  return headers;
}

function configure(app) {
  const allowedOrigins = parseOrigins(config.allowedOrigins);
  const headers = parseHeaders(config.allowedHeaders);
  app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: headers,
    preflightContinue: true,
  }));
}

module.exports = configure;
