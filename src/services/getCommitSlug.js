'use strict';

const fs = require('fs');
const path = require('path');

function getCommitSlug() {
  return new Promise((resolve) => {
    const filePath = path.resolve(__dirname, 'commitSlug.txt');
    let gitCommitSlug;
    if (fs.existsSync(filePath)) {
      gitCommitSlug = fs.readFileSync(filePath, { encoding: 'utf8' })
        .replace(/\n|\r/g, '')
        .trim();
    }
    resolve(gitCommitSlug);
  });
}


module.exports = getCommitSlug;
