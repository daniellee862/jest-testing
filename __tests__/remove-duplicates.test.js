const removeDuplicates = require("../katas/remove-duplicates");

describe("removeDuplicates", () => {
    test("returns empty array when passed empty array", () => {
        expect(removeDuplicates([])).toEqual([]);
    });

    test("returns array when passed array without duplicate", () => {
        expect(removeDuplicates([8, 4, 2, 0])).toEqual([8, 4, 2, 0]);
    });

    test("returns array without duplicate when passed array with duplicate", () => {
        expect(removeDuplicates([8, 4, 2, 2, 0])).toEqual([8, 4, 2, 0]);
    });

    test("returns array without duplicates when passed array with multiple duplicates", () => {
        expect(removeDuplicates([8, 8, 4, 4, 2, 2, 0, 0, 0, 0])).toEqual([8, 4, 2, 0]);
    });
});