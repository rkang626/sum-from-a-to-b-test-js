function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  } else if (fromN < toN) {
    return fromN + sum(fromN + 1, toN);
  } else {
    return "invalid inputs";
  }
}

module.exports = sum;
