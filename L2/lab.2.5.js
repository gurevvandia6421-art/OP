'use strict';
const phonebook = [
  { name: 'Nina', phone: '+380963445767' },
  { name: 'Nadiia', phone: '+380973892721' },
];
const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};
const phoneHash = {
  'Nina': '+380963445767',
  'Nadiia': '+380973892721',
};
const findPhoneByNameHash = (name) => phoneHash[name];
console.log('Nadiia', findPhoneByName('Nadiia'));
console.log('Nina', findPhoneByNameHash('Nina'));