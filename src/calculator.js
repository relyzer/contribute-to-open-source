exports._check = (value1, value2) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  if (typeof value1 !== 'number') {
    throw new TypeError(`${value1} is not a number`);
  }
  if (typeof value2 !== 'number') {
    throw new TypeError(`${value2} is not a number`);
  }
};

exports.add = (x, y) => {
  exports._check(x, y);
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x, y);
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x, y);
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x, y);
  return x / y;
};

module.exports = exports;
