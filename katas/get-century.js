/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

function getCentury(year) {

  const lengths = year.toString().length;
  const century = Math.ceil(year / 100);
  const centuryArray = century.toString().split('');

  if (lengths === 0) {
    return year;
  } else if (centuryArray[centuryArray.length - 2] === 1) {
    console.log(century)
    return `${century}th`
  } else if (centuryArray[centuryArray.length - 1] === 1) {
    return `${century}st`
  } else if (centuryArray[centuryArray.length - 1] === 2) {
    return `${century}nd`
  } else if (centuryArray[centuryArray.length - 1] === 3) {
    return `${century}rd`
  }

  
}

module.exports = getCentury;
