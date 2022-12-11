/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(string) {
  if (string.length > 0) {
    let newString = string.toLowerCase().split("");

    let count = 0;

    for (let i = 0; i < string.length; i++) {
      if (count % 2 === 0 && /[a-z]/gi.test(newString[i])) {
        newString[i] = newString[i].toUpperCase();
        console.log(newString[i]);
      }
      if (/[a-z]/gi.test(newString[i])) {
        console.log(newString[i]);
        count++;
      }
    }

    return newString.join("");
  }
  return string;
}

module.exports = alternateCase;
