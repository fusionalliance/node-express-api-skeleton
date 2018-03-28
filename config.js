const config = {
  appName: process.env.APP_NAME,
  debug: process.env.DEBUG,
  desiredPort: process.env.PORT || '3000',
};

module.exports = config;


TODO: Replace this file with the 12 factor config lib.