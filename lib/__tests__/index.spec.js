'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _schema = require('../schema');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('NbaColor', function () {
  it('should exist', function () {
    expect(_2.default).toBeDefined();
  });

  describe('getAllColors', function () {
    var getAllColors = _2.default.getAllColors;


    it('should exist', function () {
      expect(getAllColors).toBeDefined();
    });

    it('should match schema', function () {
      var allColors = getAllColors();
      var validateResult = _joi2.default.validate(allColors, _schema.mainSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getMainColor', function () {
    var getMainColor = _2.default.getMainColor;


    it('should exist', function () {
      expect(getMainColor).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', function () {
      var teamMainColor = getMainColor('QQ');

      expect(teamMainColor).toBe(undefined);
    });

    it('should match colorSchema if pass included uppercase team abbreviation', function () {
      var teamMainColor = getMainColor('GSW');
      var validateResult = _joi2.default.validate(teamMainColor, _schema.colorSchema);

      expect(validateResult.error).toBe(null);
    });

    it('should match colorSchema if pass included lowercase team abbreviation', function () {
      var teamMainColor = getMainColor('gsw');
      var validateResult = _joi2.default.validate(teamMainColor, _schema.colorSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getColors', function () {
    var getColors = _2.default.getColors;


    it('should exist', function () {
      expect(getColors).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', function () {
      var teamColors = getColors('QQ');

      expect(teamColors).toBe(undefined);
    });

    it('should match colorsSchema if pass included uppercase team abbreviation', function () {
      var teamColors = getColors('BOS');
      var validateResult = _joi2.default.validate(teamColors, _schema.colorsSchema);

      expect(validateResult.error).toBe(null);
    });

    it('should match colorSchema if pass included lowercase team abbreviation', function () {
      var teamColors = getColors('bos');
      var validateResult = _joi2.default.validate(teamColors, _schema.colorsSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getColorsList', function () {
    var getColorsList = _2.default.getColorsList;


    it('should exist', function () {
      expect(getColorsList).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', function () {
      var teamColorsList = getColorsList('QQ');

      expect(teamColorsList).toBe(undefined);
    });

    it('should match colorsListSchema if pass included uppercase team abbreviation', function () {
      var teamColorsList = getColorsList('OKC');
      var validateResult = _joi2.default.validate(teamColorsList, _schema.colorsListSchema);

      expect(validateResult.error).toBe(null);
    });

    it('should match colorsListSchema if pass included lowercase team abbreviation', function () {
      var teamColorsList = getColorsList('okc');
      var validateResult = _joi2.default.validate(teamColorsList, _schema.colorsListSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getFullName', function () {
    var getFullName = _2.default.getFullName;


    it('should exist', function () {
      expect(getFullName).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', function () {
      var teamFullName = getFullName('QQ');

      expect(teamFullName).toBe(undefined);
    });

    it('should return full name if pass included uppercase team abbreviation', function () {
      var teamFullName = getFullName('CHI');

      expect(typeof teamFullName === 'undefined' ? 'undefined' : _typeof(teamFullName)).toBe('string');
      expect(teamFullName).toEqual('Chicago Bulls');
    });

    it('should return full name if pass included lowercase team abbreviation', function () {
      var teamFullName = getFullName('chi');

      expect(typeof teamFullName === 'undefined' ? 'undefined' : _typeof(teamFullName)).toBe('string');
      expect(teamFullName).toEqual('Chicago Bulls');
    });
  });
});