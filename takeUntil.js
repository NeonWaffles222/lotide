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

module.exports = takeUntil;