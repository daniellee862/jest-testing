const alternateCase = require("../katas/alternate-case");

describe("alternate case tests", () => {
  test("empty string test", () => {
    expect(alternateCase("")).toBe("");
  });

  test("single character", () => {
    expect(alternateCase("d")).toBe("D");
  });

  test("two characters", () => {
    expect(alternateCase("de")).toBe("De");
  });

  test("four characters", () => {
    expect(alternateCase("deee")).toBe("DeEe");
  });

  test("string with punctuation and spaces", () => {
    expect(alternateCase("danie l.")).toBe("DaNiE l.");
  });

  test("string containing capitals", () => {
    expect(alternateCase("dEeeEEE")).toBe("DeEeEeE");
  });
});
