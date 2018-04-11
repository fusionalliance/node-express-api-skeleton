'use strict';

const chai = require('chai');
const getAppInfo = require('../../../src/services/getAppInfo');
const pkgJSON = require('../../../package.json');

chai.should();

describe('getAppInfo', () => {
  const commit = 'abc123';
  const config = { herokuSlugCommit: commit };

  it('responds with correct app information', () => getAppInfo(config)
    .then((response) => {
      response.title.should.equal(pkgJSON.name);
      response.should.have.property('environment');
      response.version.should.equal(pkgJSON.version);
      response.commit.should.equal(commit);
    })
    .catch((err) => {
      throw err;
    }));
});
