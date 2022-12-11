/*
  The orderVeg function should take a array of vegetables and return a new array in which the vegetables are sorted in ascending order according to quantity.
  e.g.
  orderVeg([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
])
should return:
[
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Runner beans', type: 'legume', quantity: 8}
]
*/

function orderVeg(array) {
  if (array.length < 2) {
    return array;
  }

  // LOOP FOR 2 ELEMENTS
  if (array.length === 2 && array[0].quantity < array[1].quantity) {
    return array;
  } else if (array.length === 2) {
    return [array[1], array[0]];
  }

  return array.sort((a, b) => {
    a.quantity - b.quantity;
  });
}

module.exports = orderVeg;
