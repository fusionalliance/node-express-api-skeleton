const express = require('express');
const middleware = require('../app-middleware');

const app = express();

middleware.configure(app);

module.exports = app;
