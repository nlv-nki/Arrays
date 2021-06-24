'use strict';


const removeElements = (array, ...items) => {
  // Remove multiple items from array modifying original array
    for (let i = 0; i  < array.length -1; i++) {
      items.forEach(item => {
        if (item === array[i] ) {
          array.splice(i, 1);
          i--;
        }
      })
    }
};


module.exports = { removeElements };
