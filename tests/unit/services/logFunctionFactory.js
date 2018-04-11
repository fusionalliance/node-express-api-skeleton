'use strict';

const chai = require('chai');
const sinon = require('sinon');
const logFunctionFactory = require('../../../src/services/logFunctionFactory');

chai.should();

describe('logFunctionFactory', () => {
  const namespace = 'MyTestNamespace';
  const message = 'my message';
  let consoleStub;
  const config = { appName: 'Test' };

  describe('getErrorLogger', () => {
    beforeEach(() => {
      consoleStub = sinon.stub(console, 'error');
    });

    it('returns function that writes to console.error', () => {
      logFunctionFactory(config).getErrorLogger(namespace).log(message);
      consoleStub.getCall(0).args.should.deep.equal([message]);
    });
  });

  describe('getWarnLogger', () => {
    beforeEach(() => {
      consoleStub = sinon.stub(console, 'warn');
    });

    it('returns function that writes to console.warn', () => {
      logFunctionFactory(config).getWarnLogger(namespace).log(message);
      consoleStub.getCall(0).args.should.deep.equal([message]);
    });
  });

  describe('getInfoLogger', () => {
    beforeEach(() => {
      consoleStub = sinon.stub(console, 'info');
    });

    it('returns function that writes to console.info', () => {
      logFunctionFactory(config).getInfoLogger(namespace).log(message);
      consoleStub.getCall(0).args.should.deep.equal([message]);
    });
  });

  describe('getDebugLogger', () => {
    beforeEach(() => {
      consoleStub = sinon.stub(console, 'log');
    });

    it('returns function that writes to console.log', () => {
      logFunctionFactory(config).getDebugLogger(namespace).log(message);
      consoleStub.getCall(0).args.should.deep.equal([message]);
    });
  });

  afterEach(() => {
    consoleStub.restore();
  });
});
