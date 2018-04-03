'use strict';

const config = {
  appName: process.env.APP_NAME,
  debug: process.env.DEBUG,
  desiredPort: process.env.PORT || '3000',
  allowedOrigins: process.env.ALLOWED_ORIGINS || '*',
};

module.exports = config;
