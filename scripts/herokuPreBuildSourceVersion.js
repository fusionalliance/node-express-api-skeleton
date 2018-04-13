'use strict';

const exec = require('child_process').exec; // eslint-disable-line prefer-destructuring

/* eslint-disable no-console */
exec('sh ./scripts/sourceVersion.sh', (error, stdout, stderr) => {
  console.log(`${stdout}`);
  console.log(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});
