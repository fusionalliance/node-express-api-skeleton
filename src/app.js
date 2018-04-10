'use strict';

const express = require('express');
const middlewareFactory = require('./app-middleware/middlewareFactory');
const config = require('./config');

const app = express();

// middleware.configure(app);
app.use(middlewareFactory(config));

module.exports = app;
