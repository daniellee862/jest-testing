/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

//1095 11th century
//divide by 10 and round up. 10.95 > 11
//divide by 10 AGAIN; 1.1, round down > 1
// 1 % 10 === 1?

function getCentury(year) {
  const century = Math.ceil(year / 100);

  const suffix =
    Math.floor(century / 10) % 10 === 1
      ? "th"
      : century % 10 === 1
      ? "st"
      : century % 10 === 2
      ? "nd"
      : century % 10 === 3
      ? "rd"
      : "th";
  return `${century}${suffix}`;
}

module.exports = getCentury;
