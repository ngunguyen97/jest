function woof(str) {
  if (typeof str !== 'string') {
    throw Error('Must be a string');
  }
  return str.length + 'woof!';
}

module.exports = woof;
