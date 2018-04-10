'use strict';

const cors = require('cors');

function parseValues(originalValues) {
  let parsedValues = originalValues;
  if (originalValues.indexOf(',') > -1) {
    parsedValues = originalValues.split(',');
  }
  return parsedValues;
}

module.exports = function corsFactory(config) {
  const allowedOrigins = parseValues(config.allowedOrigins);
  const headers = parseValues(config.allowedHeaders);
  return cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: headers,
    preflightContinue: true,
  });
};
