const getCentury = require("../katas/get-century");

describe("getCentury", () => {
    test("returns '' if passed '' ", () => {
        expect(getCentury('')).toBe('')
    });

    // test("returns first character + suffix if passed year is less than 4 characters long", () => {
    //     expect(getCentury(879)).toBe('9th')
    // });

    test("returns first character + suffix if passed year is 4 or more characters long", () => {
        expect(getCentury(2023)).toBe('21st')
    });
});