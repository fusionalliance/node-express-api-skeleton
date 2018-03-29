'use strict';

const {
  chai, describe, it,
} = require('chai');

const getAppInfo = require('../../../src/services/getAppInfo');

const pkgJSON = require('../../../package.json');

chai.should();

describe('getAppInfo', () => {
  it('responds with correct app information', () => {
    getAppInfo()
      .then((response) => {
        response.title.should.equal(pkgJSON.name);
        response.should.have.property('environment');
        response.version.should.equal(pkgJSON.version);
        response.should.have.property('commit');
        response.should.have.property('build');
      })
      .catch((err) => {
        throw err;
      });
  });
});
