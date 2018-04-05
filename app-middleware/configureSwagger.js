const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const pkgJSON = require('../package.json');

function configure(app) {
  const swaggerDefinition = {
    info: {
      title: pkgJSON.name,
      version: pkgJSON.version,
      description: pkgJSON.description,
    },
    basePath: '/api',
  };

  const swaggerOptions = {
    swaggerDefinition,
    apis: ['routes/**/index.js', 'routes/index.js'],
  };

  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  app.get('/swagger.json', (request, response) => {
    response.json(swaggerSpec);
  });

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}

module.exports = configure;
