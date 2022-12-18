const getCentury = require("../katas/get-century");

describe("getCentury", () => {
  // test("returns first character + suffix if passed year is less than 3 characters long", () => {
  //     expect(getCentury(79)).toBe('9th')
  // });

  test("returns correct centruy and suffix", () => {
    expect(getCentury(2023)).toBe("21st");
  });

  test("returns correct centruy and suffix", () => {
    expect(getCentury(222023)).toBe("2221st");
  });
  test("returns correct centruy and suffix", () => {
    expect(getCentury(22222423)).toBe("222225th");
  });
});
