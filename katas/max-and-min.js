/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/
function max(arrayOfValues) {
  if (arrayOfValues.length === 0) return undefined;

  return Math.max(
    ...arrayOfValues.filter((value) => typeof value === "number")
  );
}

function min(arrayOfValues) {
  if (arrayOfValues.length === 0) return undefined;

  return Math.min(
    ...arrayOfValues.filter((value) => typeof value === "number")
  );
}

// OR

/* 
function max(arrayOfValues) {
  // initialise maxValue as the first element in arrayOfValues
  let maxValue = arrayOfValues.length > 0 ? arrayOfValues[0] : 0;

  arrayOfValues.forEach((value) => {
    if (typeof value === "number" && value > maxValue) maxValue = value;
  });

  return arrayOfValues.length > 0 ? maxValue : 0;
}

function min(arrayOfValues) {
  let minValue = arrayOfValues.length > 0 ? arrayOfValues[0] : 0;

  arrayOfValues.forEach((value) => {
    if (typeof value === "number" && value < minValue) minValue = value;
  });

  return arrayOfValues.length > 0 ? minValue : 0;
} */

module.exports = { max, min };
