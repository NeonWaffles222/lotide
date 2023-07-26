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

const middle = function(array) {
  let middle = [];
  // check if the array has atleast 3 elements
  if (array.length < 3) {
    return middle;
  }
  // check if the array is even or odd
  if (array.length % 2 === 0) {
    for (let x = 0; x < array.length; x++) {
      // checks for when the array has an equal lenght on both sides of x
      if (array.slice(0, x).length === array.length - x) {
        // adds the middle elements to an array the returns the array
        middle.push(array[x - 1]);
        middle.push(array[x]);
        return middle;
      }
    }
  }
  for (let x = 0; x < array.length; x++) {
    // checks for when the array has an equal lenght on both sides of x
    if (array.slice(0, x).length === array.length - (x - 1)) {
      // adds the middle element to an array the returns the array
      middle.push(array[x - 1]);
      return middle;
    }
  }
};

assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);