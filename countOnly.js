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

module.exports = countOnly;