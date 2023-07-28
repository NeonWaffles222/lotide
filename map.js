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

// takes an array and a function as input
const map = function(array, callback) {
  // new array to be returned
  const results = [];
  // loop through every element of the array
  for (let item of array) {
    // puts the element through the callback function then adds it to our new array
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
let results2 = words.map(word => word[0]);
assertArraysEqual(results1, results2);