'use strict';

const removeElement = (array, item) => {
  const length = array.length -1;
  // Remove item from array modifying original array
  for (let i = 0; i  < array.length -1; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--;
    }
  }
};

module.exports = { removeElement };
