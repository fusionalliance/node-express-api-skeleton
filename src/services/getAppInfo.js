'use strict';

const express = require('express');

const app = express();
const env = app.get('env');

const pkgJSON = require('../../package.json');

function getAppInfo() {
  return new Promise((resolve) => {
    resolve({
      title: pkgJSON.name,
      environment: env,
      version: pkgJSON.version,
      commit: 'TODO!',
      build: 'TODO!',
    });
  });
}

module.exports = getAppInfo;
