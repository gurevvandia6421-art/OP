'use strict';
const ages = (persons) => {
const result = {};
for (const name in persons) {
const person = persons[name];
result[name] = person.died - person.born;
}
return result;
};
const famousPeople = {
michaelJackson: { born: 1958, died: 2009 },
queenElizabethII: { born: 1926, died: 2022 },
albertEinstein: { born: 1879, died: 1955 },
steveJobs: { born: 1955, died: 2011 }
};
console.log(ages(famousPeople));
module.exports = { ages };