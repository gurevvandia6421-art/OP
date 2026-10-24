'use strict';
const sum = (...args) => {
if (!args.length) return 0;
let total = 0;
let i = 0;
do {
total += args[i];
i++;
} while (i < args.length);
return total;
};
console.log(sum(1, 2, 3));
module.exports = { sum };