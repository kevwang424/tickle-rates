var assert = require('assert');
var helpers = require('../src/helpers.js')


describe('Helpers', function() {
  describe('#baseAndAgeIncrease(age)', function() {
    it('should take in age 18 and return 100', function() {
      assert.equal(helpers.baseAndAgeIncrease(18), 100);
    });
    it('should take in age 100 and return 100', function() {
      assert.equal(helpers.baseAndAgeIncrease(100), 420);
    });
  });

  describe('#allergiesIncrease(amount)', function() {
    it('increase premiums 1%, 100 should yield 101', function() {
      assert.equal(helpers.allergiesIncrease(100), 101);
    });
    it('increase premiums 1%, 257.74132 should yield 260.32', function() {
      assert.equal(helpers.allergiesIncrease(257.74132), 260.32);
    });
  });

  describe('#sleepApneaIncrease(amount)', function() {
    it('increase premiums 6%, 100 should yield 106', function() {
      assert.equal(helpers.sleepApneaIncrease(100), 106);
    });
    it('increase premiums 6%, 257.74132 should yield 273.21', function() {
      assert.equal(helpers.sleepApneaIncrease(257.74132), 273.21);
    });
  });

  describe('#heartDiseaseIncrease(amount)', function() {
    it('increase premiums 17%, 100 should yield 117', function() {
      assert.equal(helpers.heartDiseaseIncrease(100), 117);
    });
    it('increase premiums 17%, 257.74132 should yield 301.56', function() {
      assert.equal(helpers.heartDiseaseIncrease(257.74132), 301.56);
    });
  });

  describe('#checkCondition(amount, condition)', function() {
    it('ensure allergies case is hit, 100 should yield 101', function() {
      assert.equal(helpers.checkCondition(100, "Allergies"), 101);
    });
    it('ensure sleep apnea case is hit, 100 should yield 106', function() {
      assert.equal(helpers.checkCondition(100, "Sleep Apnea"), 106);
    });
    it('ensure heart disease case is hit, 100 should yield 117', function() {
      assert.equal(helpers.checkCondition(100, "Heart Disease"), 117);
    });
    it('ensure if not listed condition case is hit, 100 should yield 0', function() {
      assert.equal(helpers.checkCondition(100, "Not available"), 0);
    });
  });

});
