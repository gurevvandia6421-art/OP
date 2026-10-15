'use strict';
const fn = () => {
  const obj1 = { name: 'Nadiia' };
  let obj2 = { name: 'Nadiia' };
  obj1.name = 'Hurieva';
  obj2.name = 'Hurieva';
  obj2 = { name: 'Nizhyn' };
  return { obj1, obj2 };
};
const createUser = (name, city) => ({ name, city });
console.log(createUser('Nadiia Hurieva', 'Nizhyn'));