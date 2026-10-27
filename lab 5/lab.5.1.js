'use strict';
const seq = (f) => (g) => {
  if (typeof g === 'number') return f(g);
  return seq((x) => f(g(x)));
};
console.log(seq(x => x + 6)(x => x * 2)(2));
console.log(seq(x => x * 2)(x => x + 6)(2));
console.log(seq(x => x + 2)(x => x * 6)(x => x / 3)(x => x - 1)(2));
module.exports = { seq };