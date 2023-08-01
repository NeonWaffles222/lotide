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

module.exports = without;