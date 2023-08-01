const index = require('./index');

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual = index.eqObjects(actual, expected);
  if (isEqual) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectEqual;