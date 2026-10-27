'use strict';
const compose = (...fns) => {
const handlers = [];
const f = (x) => {
try {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch {
      handlers.forEach(h => h('до связі...'));
    }
  };
  f.on = (e, h) => (e === 'error' && handlers.push(h), f);
  return f;
};
module.exports = { compose };