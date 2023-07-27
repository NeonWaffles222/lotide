
const eqArrays = function(actualArray, expectedArray) {
  // checks that the arrays are the same length
  if (actualArray.length !== expectedArray.length) {
    return false;
  }
  // check if the value of each element is the same
  for (let x = 0; x < actualArray.length; x++) {
    if (actualArray[x] !== expectedArray[x]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(objectActual, objectExpexted) {
  // Check that the objects have the same number of keys
  if (Object.keys(objectActual).length !== Object.keys(objectExpexted).length) {
    return false;
  }
  // check if the value of each key is the same
  // if the keys have diffrent names object[key] will be undefined and return false
  for (let key in objectActual) {
    // check if the value is an array
    if (Array.isArray(objectActual[key]) && Array.isArray(objectExpexted[key])) {
      let isAnArray = eqArrays(objectActual[key], objectExpexted[key]);
      if (!isAnArray) {
        return false;
      }
    } else if (objectActual[key] !== objectExpexted[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // True
assertObjectEqual({ a: '1', b: 3 }, { b: 2, a: 1 }); // False