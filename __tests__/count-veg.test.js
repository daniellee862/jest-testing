const countVeg = require('../katas/count-veg')

describe('countVeg', () => {
    test('returns 0 if passed empty array', () => {
        expect(countVeg([])).toBe(0)
    });

    test('returns quantity if passed array with one type of veg', () => {
        expect(countVeg([{name: 'Parsnip', type: 'root', quantity: 4}])).toBe(4)
    });

    test('returns quantity if passed array with more than one veg', () => {
        expect(countVeg([{name: 'Parsnip', type: 'root', quantity: 4},
        {name: 'Carrot', type: 'root', quantity: 5}], 'root')).toBe(9)
    });

    test('returns quantity of string if passed array with more than one type veg', () => {
        expect(countVeg([{name: 'Parsnip', type: 'root', quantity: 4},
        {name: 'Broccoli', type: 'brassica', quantity: 1}], 'root')).toBe(4)
    });

    test('returns quantity of string if passed array with same type veg', () => {
        expect(countVeg([{name: 'Parsnip', type: 'root', quantity: 4},
        {name: 'Broccoli', type: 'brassica', quantity: 1},
        {name: 'Broccoli', type: 'brassica', quantity: 1},
        {name: 'Broccoli', type: 'brassica', quantity: 1}], 'brassica')).toBe(3)
    });

    test('returns quantity of string if passed full array', () => {
        expect(countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], 'root')).toBe(9)
    });
});