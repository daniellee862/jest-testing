const { max, min } = require("../katas/max-and-min");

/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/

// ARRANGE / ACT / ASSERT

const positiveIntegers = [5, 10, 2, 8, 3];
const negativeIntegers = [-5, -10, -2, -8, -3];

describe("max()", () => {
  test("if array has no elements, return 0", () => {
    expect(max([])).toEqual(0);
  });

  test("returns maximum value from an array of positive values", () => {
    expect(max(positiveIntegers)).toEqual(10);
  });

  test("returns maximum value from an array of negative values", () => {
    expect(max(negativeIntegers)).toEqual(-2);
  });

  test("returns maximum value from an array of mixed values", () => {
    expect(max([...positiveIntegers, ...negativeIntegers])).toEqual(10);
  });

  test("returns maximum value from an array with duplicate values", () => {
    expect(max([...positiveIntegers, ...positiveIntegers])).toEqual(10);
  });

  test("returns maximum value from an array with mixed data types", () => {
    expect(max([5, 10, "2", 8, 3])).toEqual(10);
  });
});

describe("min()", () => {
  test("if array has no elements, return 0", () => {
    expect(min([])).toEqual(0);
  });

  test("returns minumum value from an array of positive values", () => {
    expect(min(positiveIntegers)).toEqual(2);
  });

  test("returns minimum value from an array of negative values", () => {
    expect(min(negativeIntegers)).toEqual(-10);
  });

  test("returns minimum value from an array of mixed values", () => {
    expect(min([...positiveIntegers, ...negativeIntegers])).toEqual(-10);
  });

  test("returns minimum value from an array with duplicate values", () => {
    expect(min([...positiveIntegers, ...positiveIntegers])).toEqual(2);
  });

  test("returns minimum value from an array with mixed data types", () => {
    expect(min([5, 10, "2", 8, 3])).toEqual(3);
  });
});

describe("min()", () => {});
