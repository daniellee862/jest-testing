const orderVeg = require("../katas/order-veg");

const veg = [
  { name: "Parsnip", type: "root", quantity: 4 },
  { name: "Broccoli", type: "brassica", quantity: 1 },
  { name: "Carrot", type: "root", quantity: 5 },
  { name: "Onion", type: "bulb", quantity: 3 },
  { name: "Chard", type: "leaf", quantity: 3 },
  { name: "Runner beans", type: "legume", quantity: 8 },
];

describe("orderVeg", () => {
  test("empty array", () => {
    expect(orderVeg([])).toEqual([]);
  });

  test("one veg", () => {
    expect(orderVeg([veg[0]])).toEqual([veg[0]]);
  });

  test("two veg, return largest quantity", () => {
    expect(
      orderVeg([
        { name: "Parsnip", type: "root", quantity: 4 },
        { name: "Broccoli", type: "brassica", quantity: 1 },
      ])
    ).toEqual([
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Parsnip", type: "root", quantity: 4 },
    ]);
  });

  test("return sorted array", () => {
    expect(orderVeg([...veg])).toEqual([...veg]);
  });
});
