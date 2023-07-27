const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };

// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);