const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectEqual = require('./assertObjectEqual');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  middle,
  tail,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectEqual,
  countOnly,
  countLetters,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
};