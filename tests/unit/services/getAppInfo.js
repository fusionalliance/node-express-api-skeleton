const chai = require('chai');

const getAppInfo = require('../../../services/getAppInfo');

const pkgJSON = require('../../package.json');

chai.should();

describe('getAppInfo', () => {
  it('responds with correct app information', () => {
    return getAppInfo()
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
