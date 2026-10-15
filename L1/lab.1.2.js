'use strict';

function incNum(object) {
  object.n += 1;
}

const myObj = { n: 5 };
incNum(myObj);

console.dir(myObj);