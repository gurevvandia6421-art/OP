'use strict';
const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => x * x * x;
const calculate = () => {
  const res = [];
  for (let i = 0; i <= 9; i++) {
    res.push(average(square(i), cube(i)));
  }
  return res;
};
console.log(calculate());