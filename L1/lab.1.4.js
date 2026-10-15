'use strict';

const list = [true, 'text', 10, 25, -100, false, 'js', 3.14, null, undefined, Symbol('test')];

const resultHash = {};

for (const item of list) {
  const itemType = typeof item;

  if (resultHash[itemType] === undefined) {
    resultHash[itemType] = 1;
  } else {
    resultHash[itemType] += 1;
  }
}

console.dir(resultHash);