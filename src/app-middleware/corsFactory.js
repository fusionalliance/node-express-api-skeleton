'use strict';

const cors = require('cors');

function parseValues(originalValues) {
  let parsedValues = originalValues;
  if (originalValues.includes(',')) {
    parsedValues = originalValues.split(',');
  }
  return parsedValues;
}

module.exports = function corsFactory(config) {
  const origin = parseValues(config.allowedOrigins);
  const allowedHeaders = parseValues(config.allowedHeaders);
  return cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    preflightContinue: true,
    allowedHeaders,
    origin,
  });
};
