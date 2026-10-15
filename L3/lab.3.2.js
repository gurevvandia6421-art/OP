'use strict';
const characters = 'vgtdrsreserdy9hoh89426721';
const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    key += characters[index];
  }
  return key;
};
const key = generateKey(16, characters);
console.log(key);
module.exports = { generateKey };