const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  // defines an object to return
  let count = {};
  for (let itemCount in itemsToCount) {
    for (let item of allItems) {
      // checks if the value of the key is true
      if (!itemsToCount[itemCount]) {
        { break; }
      }
      // adds to the count if the names match
      if (item === itemCount && count[item]) {
        count[item] += 1;
        // declairs a new key within the object
      } else if (item === itemCount) {
        count[item] = 1;
      }
    }
  }
  return count;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);