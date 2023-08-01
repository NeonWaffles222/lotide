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

module.exports = map;