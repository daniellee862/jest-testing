/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/

function removeDuplicates(array) {

  let newArray = [];

  if (array.length === 0) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  } return newArray;
}

module.exports = removeDuplicates;
