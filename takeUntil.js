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

const takeUntil = function(array, callback) {
  // A new array to return
  let result = [];
  // loop throught each element of the array
  for (let element of array) {
    // if the result of the callback function with the input of the current element is true
    // the result array will be returned.
    // If it is false then that element will be added to the array.
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);