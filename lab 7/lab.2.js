'use strict'
const array = [1, 2, 3, 4, 5, 6, 7];
const removeElements = (array, ...items) => {
    for (let i = 0; i < items.length; ++i) {
        const index = array.indexOf(items[i]);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
}
removeElements(array, 5, 1, 6);
console.log(array);
const cities = ['Kiev', 'New York', 'Rome', 'Lviv'];
removeElements(cities, 'Rome', 'London', 'Kiev');
console.log(cities);
