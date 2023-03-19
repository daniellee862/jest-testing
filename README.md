# Jest Testing

The purpose of the exercises was to build on my TDD skills.

The goal of my tests was to ensure my functions return the correct output when given a range of inputs.

The most important thing to test is that my function behaves in the way it should! When I was confident my function behaves as any reasonable user would expect it to, I then consider **edge cases** where the function may have to deal with extreme, unexpected, unusual or incorrect inputs - but I focussed on the _'happy path'_ first!

I tested **'interfaces not implementations'** - I cared only about what my function returns when given some input. I didn't try to test what exactly is happening inside the function or that people are using it in the correct way, I test that it returns the correct results for a range of different inputs.

**Run `npm test` to run every test in the `__tests__` folder.**.

### Section 1

- sumDigits
- countVeg
- alternateCase
- getCentury
- areOrdered
- checkUsernames
- maxAndMin
- sumArgs
- sumAscii
- getYearsOfGrowth.

### Section 2

- orderVeg
- checkStudents
- range
- removeDuplicates
- getDistinctLetters
- getMostRepeated
- mergeArrays
- getFrequencies
- lengthenDate
- caesarCipher

## Resources

If you'd like a primer on Test Driven Development, read [this blog post by Eric Elliott](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d).

[Jest documentation](https://jestjs.io/docs/en/getting-started)
