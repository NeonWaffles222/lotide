const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let results = {};
  for (let letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const letters = countLetters("hello");
assertEqual(letters['h'], 1);
assertEqual(letters['e'], 1);
assertEqual(letters['l'], 2);
assertEqual(letters['o'], 1);