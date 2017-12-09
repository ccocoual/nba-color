'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Team = function Team(teamAbbreviation) {
  return {
    toUpperCase: function toUpperCase() {
      return Team(_ramda2.default.toUpper(teamAbbreviation));
    },
    getMainColor: function getMainColor() {
      return _ramda2.default.prop('mainColor', _colors2.default[teamAbbreviation]);
    },
    getColors: function getColors() {
      return _ramda2.default.prop('colors', _colors2.default[teamAbbreviation]);
    },
    getColorsList: function getColorsList() {
      var getColorsKeys = _ramda2.default.compose(_ramda2.default.keys, _ramda2.default.prop('colors'));
      var checkEmpty = _ramda2.default.ifElse(_ramda2.default.isEmpty(), function () {
        return undefined;
      }, _ramda2.default.identity());

      return _ramda2.default.compose(checkEmpty, getColorsKeys)(_colors2.default[teamAbbreviation]);
    },
    getFullName: function getFullName() {
      return _ramda2.default.prop('fullName', _colors2.default[teamAbbreviation]);
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