const areOrdered = require("../katas/are-ordered");

describe("areOrdered", () => {
  test("returns false when passed empty array", () => {
    expect(areOrdered([])).toBe(false);
  });

  test("return true if array is in ascending order", () => {
    // ARRANGE ACT ASSERT
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(areOrdered(numArray)).toBe(true);
  });

  test("return false array is not in ascending order", () => {
    // ARRANGE ACT ASSERT
    const numArrayDesc = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(areOrdered(numArrayDesc)).toBe(false);
  });
});
