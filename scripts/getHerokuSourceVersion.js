'use strict';

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'herokuCommitSlug.txt');

const tmp = fs.readFileSync(filePath, { encoding: 'utf8' })
  .replace(/\n|\r/g, '')
  .trim();

module.exports = tmp;
