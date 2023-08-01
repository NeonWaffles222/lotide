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

module.exports = findKey;