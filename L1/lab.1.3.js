'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 42, Symbol('id')];

const typeCounts = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (const elem of arr) {
  const t = typeof elem;
  if (typeCounts[t] !== undefined) {
    typeCounts[t]++;
  }
}

console.dir(typeCounts);