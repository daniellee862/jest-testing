/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(array) {
  if (array.length === 0) {
    return false;
  }

  //create new array
  const newArray = [...array];

  //sort the new array
  const sorted = newArray.sort(function (a, b) {
    return a - b;
  });

  //turn the sorted array and input array into json strings so you can compare, arrays/objects are compared by reference!
  return JSON.stringify(array) === JSON.stringify(sorted) ? true : false;
}

module.exports = areOrdered;
