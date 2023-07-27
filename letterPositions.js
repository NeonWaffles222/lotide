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

const assertArraysEqual = function(actual, expected) {
  // checks if the 2 arrays are equal and assigns true or false to isEqual
  let isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] === ' ') {
      x++;
    }
    if (results[sentence[x]]) {
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]] = [x];
    }
  }
  return results;
};

let pos = letterPositions("hello");
console.log(pos);
assertArraysEqual(pos['h'], [0]);
assertArraysEqual(pos['e'], [1]);
assertArraysEqual(pos['l'], [2, 3]);
assertArraysEqual(pos['o'], [4]);