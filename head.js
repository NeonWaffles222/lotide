const head = (array) => {
  if (Array.isArray(array)) {
    return array[0];
  }
};
module.exports = head;