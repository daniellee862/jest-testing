/*
  The function checkStudents should take a list of students and a cohort and return true if all students are in the given cohort and false if any students are not in the given cohort.
  E.g. checkStudents([
    {name: 'Ben', cohort: 'October'},
    {name: 'Amanda', cohort: 'April'},
    {name: 'Matt', cohort: 'April'}
  ], 'April')
  --> false
*/

function checkStudents(array, cohort) {

  if (array.length === 0) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].cohort !== cohort) {
      return false;
    }
  }
  return true;
}

module.exports = checkStudents;
