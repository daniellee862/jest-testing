/*
  The function countVeg should take an array of vegetables and a string of the type of vegetable and return the total quantity of that type of vegetable in the array.
  Vegetable types can be root, leaf, legume, bulb or brassica.
  e.g.
  countVeg([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
], 'root') should return 9
*/

function countVeg(array, string) {

 // const vegName = array[0].string;

  let newArray = [];
  let sum = 0;

  if (array.length < 1) {
    return 0;
  } if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].type === string) {
        newArray.push(array[i].quantity);
      }
    }
      newArray.map((number) => {
        sum += number;
      });
   return sum;
  }
  return array[0].quantity;
}

module.exports = countVeg;
