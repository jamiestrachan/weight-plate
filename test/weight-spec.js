'use strict';
var expect = require('chai').expect;
var Weight = require('../js/weight');

describe('Weight', function() {
  it('should exist', function() {
      expect(Weight).to.not.be.undefined;
  });
  it('should require a default value', function() {
    let w = new Weight();
    expect(w).to.eql({});
  });

  describe('#value()', function() {
    it('should return the initial value', function() {
      let val = 45;
      let w = new Weight(val);
      expect(w.value()).to.equal(val);
  
      val = 25;
      w = new Weight(val);
      expect(w.value()).to.equal(val);
    });
  });
});