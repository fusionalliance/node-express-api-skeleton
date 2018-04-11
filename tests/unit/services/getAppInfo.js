'use strict';

const chai = require('chai');
const getAppInfo = require('../../../src/services/getAppInfo');
const pkgJSON = require('../../../package.json');

chai.should();

describe('getAppInfo', () => {
  const config = { herokuSlugCommit: '1232' };

  it('responds with correct app information', () => getAppInfo(config)
    .then((response) => {
      response.title.should.equal(pkgJSON.name);
      response.should.have.property('environment');
      response.version.should.equal(pkgJSON.version);
      response.should.have.property('commit');
    })
    .catch((err) => {
      throw err;
    }));

  after(() => {
    delete process.env;
  });
});
