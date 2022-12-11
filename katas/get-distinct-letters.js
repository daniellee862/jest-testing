/*
  The function getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.

  For example, when given 'hello' and 'world', the function should return 'dehrw'
  This is because h and e are in 'hello' but not in 'world', and w, r and d are in 'world' but not in 'hello'. hewrd' sorted => 'dehrw'
*/

function getDistinctLetters(a, b) {
  if (!a && !b) {
    return "";
  }

  let string = [];
  let c = a.concat(b).split("");

  // for (let i = 0; i < a.length; i++) {
  //   if (b.indexOf(a[i]) === -1) {
  //     string.push(a[i]);
  //   }
  // }

  for (let i = 0; i < c.length; i++) {
    if (string.indexOf(c[i]) === -1) {
      string.push(c[i]);
    } else {
      string.splice(c[i], 1);
    }
  }

  console.log(string);
  return string.sort().join("");
}

module.exports = getDistinctLetters;
