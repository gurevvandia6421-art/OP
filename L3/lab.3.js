'use strict';
const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log('Random (0-3):', random(3));
console.log('Random (3-6):', random(3, 6));
module.exports = { random };