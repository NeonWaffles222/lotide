const middle = (array) => {
  let middle = [];
  // check if the array has atleast 3 elements
  if (array.length < 3) {
    return middle;
  }
  // check if the array is even or odd
  if (array.length % 2 === 0) {
    middle.push(array[((array.length / 2) - 1)]);
    middle.push(array[(array.length / 2)]);
    return middle;
  }
  middle.push(array[Math.ceil(array.length / 3)]);
  return middle;
};

module.exports = middle;