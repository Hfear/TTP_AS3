const mathFunctions = require("./mathFunctions")


test('add(1, 2) adds 1 + 2 to equal 3', () => {
    expect(mathFunctions.add(1, 2)).toBe(3);
  });

  test('subract(3, 2) subtracts 2 from 3 to equal 1', () => {
    expect(mathFunctions.subtract(3, 2)).toBe(1);
  });

  test('multiply(4,5) multiplies 4 and 5 to equal 20', () => {
    expect(mathFunctions.multiply(4, 5)).toBe(20);
  });

  test('divide(10,5) divides 10 by 5 to equal 2', () => {
    expect(mathFunctions.divide(10, 5)).toBe(2);
  });

  test('divide(10,0) divides 10 by 0 and returns infinity', () => {
    expect(mathFunctions.divide(10, 0)).toBe(Infinity);
  });


