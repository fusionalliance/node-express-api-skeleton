'use strict';

const config = {
  allowedHeaders: process.env.ALLOWED_HEADERS || '*',
  allowedOrigins: process.env.ALLOWED_ORIGINS || '*',
  appName: process.env.APP_NAME,
  debug: process.env.DEBUG,
  desiredPort: process.env.PORT || '3000',
  nodeEnv: process.env.NODE_ENV || 'development',
};

module.exports = config;
