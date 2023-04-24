const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};
module.exports = wordSearch;

// function receives a 2D array of letters and a word
// The function must:
// check to find the word horizontally and vertically
// return true if the word is found, and return false if the word is not found
