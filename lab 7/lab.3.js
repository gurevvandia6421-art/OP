'use strict'
const unique = (array) => {
    const newarray = [];
    for (let i = 0; i < array.length; ++i) {
        if (newarray.indexOf(array[i]) === -1) {
            newarray.push(array[i]);
        }
    }
    return newarray;
}
console.log(unique([2, 1, 1, 3, 2]));
console.log(unique(['top', 'bottom', 'top', 'left']));