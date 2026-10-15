'use strict';

function inc(number) {
  return number + 1;
}

const startValue = 5;
const resultValue = inc(startValue);

console.dir({ startValue, resultValue });