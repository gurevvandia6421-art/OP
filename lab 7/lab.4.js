'use strict'
const difference = (array1, array2) => {
    const newarray = [];
    for (let i = 0; i < array1.length; ++i) {
        if (array2.indexOf(array1[i]) === -1) {
            newarray.push(array1[i]);
        }
    }
    return newarray;
}
console.log(difference([7, -2, 10, 5, 0], [0, 10]));
console.log(difference(['Berlin', 'Kiev'], ['Kiev', 'London', 'Vienna']));
