const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Will only return the first key that returns true in the callback function
const findKey = function(object, callback) {
  // loop through every key in the object
  for (let key in object) {
    // if the callback funtion returns true define a new string and return it
    if (callback(object[key])) {
      let result = key;
      return result;
    }
  }
  // returns undefined if the callback never returns true
  return;
};

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 1 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result, "Ora");