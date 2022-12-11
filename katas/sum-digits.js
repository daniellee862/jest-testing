/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(number) {
  const numArray = number.toString().split("");

  let count = 0;

  for (let i = 0; i < numArray.length; i++) {
    if (/[0-9]/.test(numArray[i])) {
      count += Number(numArray[i]);
    }
  }

  return numArray.length > 1 ? count : number;
}

module.exports = sumDigits;
