'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const difference = (array1, array2) => {

  let result = array1.filter((item) =>{
    if (!array2.includes(item)) {
      return true;
    }
  })
  return result;
}

const result = difference(array1, array2);
console.log(result);
module.exports = { difference };
