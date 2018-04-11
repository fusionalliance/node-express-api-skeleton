'use strict';

const express = require('express');
const config = require('../config');
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
      commit: config.herokuSlugCommit || gitInfo.long,
    });
  });
}

module.exports = getAppInfo;
