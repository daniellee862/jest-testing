/*
  The function range should take up to 3 arguments: a length, a start value and a step value.
 1. If it has only a length, it should return an array of numbers from 0 with length specified.
 2. If it also has a start value the returned array should start at this value instead of 0.
 3. If there is also a step value the numbers in the array should increase by the specified step.
  E.g. range(5) --> [0, 1, 2, 3, 4]
  range(5, 2) --> [2, 3, 4, 5, 6]
  range(5, 2, 2) --> [2, 4, 6, 8, 10]
*/

function range(length, start, step) {
  if (length === 0) {
    return [];
  }

  let newArray = [];

  // let startIndex = start ? start : 0;

  if (!step) {
    for (let i = 0; i < length; i++) {
      if (start) {
        newArray.push(parseInt(i + start));
      } else {
        newArray.push(i);
      }
    }
  } else {
    for (let i = 0; i < length + (start + 2); i += step) {
      if (start) {
        newArray.push(parseInt(i + start));
      } else {
        newArray.push(i);
      }
    }
  }

  console.log(newArray);
  return newArray;
}

module.exports = range;
