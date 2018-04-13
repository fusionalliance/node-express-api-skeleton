'use strict';

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'commitSlug.txt');

let gitCommitSlug;

if (fs.existsSync(filePath)) {
  gitCommitSlug = fs.readFileSync(filePath, { encoding: 'utf8' })
    .replace(/\n|\r/g, '')
    .trim();
}

module.exports = gitCommitSlug;
