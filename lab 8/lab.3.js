'use strict'
const contract = (fn, ...types) => {
    return (...args) => {
        for (let i = 0; i < args.length; ++i) {
            if (typeof args[i] !== types[i].name.toLowerCase()) {
                throw new TypeError(`Wrong type of argument ${i + 1}`);
            }
        }
        const result = fn(...args);
        const resultType = types[types.length - 1];
        if (typeof result !== resultType.name.toLowerCase()) {
            throw new TypeError('Wrong type of result');
        }
        return result;
    };
}
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);