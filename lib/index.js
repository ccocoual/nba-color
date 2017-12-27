'use strict';

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = require('ramda');

var Team = function Team(teamAbbreviation) {
  return {
    toUpperCase: function toUpperCase() {
      return Team(R.toUpper(teamAbbreviation));
    },
    getMainColor: function getMainColor() {
      return R.prop('mainColor', _colors2.default[teamAbbreviation]);
    },
    getColors: function getColors() {
      return R.prop('colors', _colors2.default[teamAbbreviation]);
    },
    getColorsList: function getColorsList() {
      var getColorsKeys = R.compose(R.keys, R.prop('colors'));
      var checkEmpty = R.ifElse(R.isEmpty(), function () {
        return undefined;
      }, R.identity());

      return R.compose(checkEmpty, getColorsKeys)(_colors2.default[teamAbbreviation]);
    },
    getFullName: function getFullName() {
      return R.prop('fullName', _colors2.default[teamAbbreviation]);
    }
  };
};

var getAllColors = function getAllColors() {
  return _colors2.default;
};

var getMainColor = function getMainColor(teamAbbreviation) {
  return Team(teamAbbreviation).toUpperCase().getMainColor();
};

var getColors = function getColors(teamAbbreviation) {
  return Team(teamAbbreviation).toUpperCase().getColors();
};

var getColorsList = function getColorsList(teamAbbreviation) {
  return Team(teamAbbreviation).toUpperCase().getColorsList();
};

var getFullName = function getFullName(teamAbbreviation) {
  return Team(teamAbbreviation).toUpperCase().getFullName();
};

module.exports = {
  getAllColors: getAllColors,
  getMainColor: getMainColor,
  getColors: getColors,
  getFullName: getFullName,
  getColorsList: getColorsList
};