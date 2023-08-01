const index = require('./index');

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
      let isAnArray = index.eqArrays(objectActual[key], objectExpexted[key]);
      if (!isAnArray) {
        return false;
      }
    } else if (objectActual[key] !== objectExpexted[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;