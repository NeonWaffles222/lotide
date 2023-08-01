const countLetters = function(str) {
  let results = {};
  for (let letter of str) {
    if (letter == " ") {

    } else if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;