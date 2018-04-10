'use strict';

const express = require('express');
const middleware = require('./app-middleware');
const config = require('./config');

const app = express();

// middleware.configure(app);
app.use(middleware(config));

module.exports = app;
