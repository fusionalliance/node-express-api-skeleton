'use strict';

const express = require('express');
const getAppInfo = require('../services/getAppInfo');
const config = require('../config');

const router = new express.Router();

router.get('/', async (request, response) => {
  const appInfo = await getAppInfo(config);
  response.status(200).json({
    title: appInfo.title,
    environment: appInfo.environment,
    version: appInfo.version,
    commit: appInfo.commit,
    build: appInfo.build,
  });
});

module.exports = router;
