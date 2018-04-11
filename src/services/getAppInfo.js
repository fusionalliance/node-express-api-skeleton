'use strict';

const express = require('express');
const pkgJSON = require('../../package.json');
const gitData = require('../services/getGitData');

const app = express();
const env = app.get('env');

async function getAppInfo() {
  const gitInfo = await gitData();
  return new Promise((resolve) => {
    resolve({
      title: pkgJSON.name,
      environment: env,
      version: pkgJSON.version,
      commit: process.env.HEROKU_SLUG_COMMIT || gitInfo.long,
    });
  });
}

module.exports = getAppInfo;
