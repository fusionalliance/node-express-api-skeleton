const swaggerOptions = require('../swagger.json');
const swaggerUI = require('swagger-ui-express');

const pkgJSON = require('../package.json');
const routeDocs = require('../routes/routeDocs.json');

function configure(app) {
  swaggerOptions.info.version = pkgJSON.version;
  swaggerOptions.info.title = pkgJSON.name;
  swaggerOptions.info.description = pkgJSON.description;
  swaggerOptions.paths = routeDocs;
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerOptions));
}

module.exports = configure;
