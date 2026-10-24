'use strict';
const max = (matrix) => {
let maxVal = matrix[0][0];
for (let i = 0; i < matrix.length; i++) {
for (let j = 0; j < matrix[i].length; j++) {
if (matrix[i][j] > maxVal) {
maxVal = matrix[i][j];
}
}
}
return maxVal;
};
console.log(max([[1, 2], [3, 4]]));
module.exports = { max };