const checkStudents = require("../katas/check-students");

describe("checkStudents", () => {
    test("returns empty array when passed empty array", () => {
        expect(checkStudents([])).toEqual([]);
    });

    test("returns false when passed array with 2 different cohorts", () => {
        expect(checkStudents([{name: 'Ben', cohort: 'October'},
        {name: 'Amanda', cohort: 'April'}], 'April')).toEqual(false);
    });

    test("returns true when passed array with 2 same cohorts", () => {
        expect(checkStudents([{name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}], 'April')).toEqual(true);
    });

    test("returns false when passed array with multi cohorts", () => {
        expect(checkStudents([{name: 'Ben', cohort: 'October'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'},
            {name: 'Daniel', cohort: 'November'},
            {name: 'Dee', cohort: 'November'}], 'November')).toEqual(false);
    });
})