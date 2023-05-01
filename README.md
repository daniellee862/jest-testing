
# Jest Testing

Looking for a fun and exciting way to improve your coding skills? Look no further than my Jest Testing project! 🚀

In this project, I've focused on honing my Test Driven Development (TDD) skills by testing a range of functions with different inputs. My goal was to ensure that each function returned the correct output when given a variety of inputs. 💯

But that's not all! I've also made sure to consider edge cases where the function might have to deal with unexpected, unusual, or incorrect inputs. And by testing "interfaces not implementations," I focused on what my function returns when given some input, rather than trying to test what's happening inside the function or whether people are using it correctly. 🤓

So whether you're a beginner or an experienced developer, you can use my project to sharpen your TDD skills and make sure your code is bug-free. And with functions like sumDigits, countVeg, and caesarCipher, you'll find plenty of examples to learn from. 🧐

Ready to start testing your code with Jest Testing? Simply run the "npm test" command to test every function in the tests folder. And if you need help getting started, I've included a helpful blog post by Eric Elliott and links to the Jest documentation to guide you along the way. 📖

Thank you for considering my Jest Testing project to improve your coding skills. Let's get testing! 💪
## Documentation

[Blog post by Eric Elliott](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)

[Jest documentation](https://jestjs.io/docs/getting-started)


## Running Tests

To run tests, run the following command

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

