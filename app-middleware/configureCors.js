'use strict';

const cors = require('cors');
const config = require('../src/config');

function parseValues(originalValues) {
  let parsedValues = originalValues;
  if (originalValues.indexOf(',') > -1) {
    parsedValues = originalValues.split(',');
  }
  return parsedValues;
}

function configure(app) {
  const allowedOrigins = parseValues(config.allowedOrigins);
  const headers = parseValues(config.allowedHeaders);
  app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: headers,
    preflightContinue: true,
  }));
}

module.exports = configure;
