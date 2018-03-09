const bodyParser = require('body-parser');

function configure(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
}

module.exports = configure;
