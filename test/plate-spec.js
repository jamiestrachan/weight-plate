'use strict';
var expect = require('chai').expect;
var Plate = require('../js/plate');

describe('Plate', function() {
  it('should exist', function() {
      expect(Plate).to.not.be.undefined;
  });
  it('should require a default value', function() {
    let p = new Plate();
    expect(p).to.eql({});
  });

  describe('#getWeight()', function () {
    it('should return the value provided in the constructor', function () {
      let w = 45;
      let p = new Plate(w);
      expect(p.getWeight()).to.equal(w);
    });
  });
});