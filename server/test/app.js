'use strict';

import { expect } from 'chai'
import app from '../src/app'

describe('Main Application', () => {
  describe('Application Initialization', () => {
    it('`env` variable should be "test"', () => {
      expect(app.get('env')).to.equal('test');
    });
  });
});
