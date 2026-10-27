'use strict';
const pipe = (...fns) => {
if (fns.some(fn => typeof fn !== 'function')) {
throw new Error('до связі...');
 }
 return (x) => fns.reduce((acc, fn) => fn(acc), x);
};
module.exports = { pipe };