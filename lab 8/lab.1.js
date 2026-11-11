'use strict'
const iterate = (object, callback) => {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        callback(key, object[key], object);
    }
}
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
    console.log({ key, value });
});