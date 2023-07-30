
# Jest Testing 🚀

Test Driven Development (TDD) practice by testing a range of functions with different inputs. My goal was to ensure that each function returned the correct output when given a variety of inputs. 💯

I also made sure to consider edge cases where the function might have to deal with unexpected, unusual, or incorrect inputs. And by testing "interfaces not implementations," I focused on what my function returns when given some input, rather than trying to test what's happening inside the function or whether it is being used correctly. 🤓


## Documentation 📖

I've included a helpful blog post by Eric Elliott and links to the Jest documentation to guide you along the way. 

[Blog post by Eric Elliott](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)

[Jest documentation](https://jestjs.io/docs/getting-started)


## Running Tests

Simply run the "npm test" command to test every function in the tests folder. 

```bash
  npm run test
```


## Usage/Examples

```javascript
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
```

