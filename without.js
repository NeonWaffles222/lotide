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

const without = function(source, itemsToRemove) {
  // create a copy of the array that wont affect the original
  let itemsRemoved = source.slice();
  // loop through both arrays and remove any elements that match
  for (let item of itemsToRemove) {
    for (let x = 0; x < itemsRemoved.length; x++) {
      if (itemsRemoved[x] === item) {
        itemsRemoved.splice(x, 1);
      }
    }
  }
  return itemsRemoved;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);