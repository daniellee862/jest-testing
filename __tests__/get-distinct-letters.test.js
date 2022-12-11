const getDistinctLetters = require("../katas/get-distinct-letters");

describe("distinct letters tests", () => {
  test("return empty strings, when passed empty strings", () => {
    expect(getDistinctLetters("", "")).toBe("");
  });

  //   test("return nothing for same letters", () => {
  //     expect(getDistinctLetters("bat", "tab")).toBe("");
  //   });

  test("return all for no unique letters", () => {
    expect(getDistinctLetters("abcde", "fghijk")).toBe("abcdefghijk");
  });

  test("return correct string for mixed letters", () => {
    expect(getDistinctLetters("afbcde", "feghibjk")).toBe("acdghijk");
  });
});
