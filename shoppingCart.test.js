const shoppingCart = require("./shoppingCart")

test('Adds an item with a specified quantity to the shopping cart', () => {
    expect(shoppingCart.addToCart('meat', 4)).toStrictEqual([ { item: 'cheese', quantity: 5 }, { item: 'meat', quantity: 4 } ]);
  });

//   test('Removes a specified quantity of an item from the shopping cart.', () => {
//     expect(shoppingCart.removeFromCart('cheese', 1)).toStrictEqual([ { item: 'cheese', quantity: 4 } ]);
//   });