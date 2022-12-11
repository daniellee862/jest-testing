const range = require("../katas/range");

describe("range tests", () => {
  test("zero length returns empty array", () => {
    expect(range(0)).toEqual([]);
  });

  test("array with length returns range of length", () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });

  test("returns array of length starting at given index", () => {
    expect(range(5, 2)).toEqual([2, 3, 4, 5, 6]);
  });

  test("returns array of length starting at given index and increases by step", () => {
    expect(range(5, 2, 2)).toEqual([2, 4, 6, 8, 10]);
  });

  test.only("returns array of length starting at given index and increases by step", () => {
    expect(range(5, 2, 3)).toEqual([2, 5, 8, 11, 14]);
  });
});
