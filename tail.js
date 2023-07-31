const tail = (array) => {
  if (Array.isArray(array)) {
    return array.slice(1);
  }
  return;
};

module.exports = tail;