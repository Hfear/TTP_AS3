const mostWater = require("./mostWater")

test('Given an array of non-negative integers representing the heights of vertical lines, find two lines that together with the x-axis forms a container that holds the most water.', () =>{
    expect(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(64);
});

test('Given an array of non-negative integers representing the heights of vertical lines, find two lines that together with the x-axis forms a container that holds the most water.', () =>{
    expect(mostWater( [4, 3, 2, 1, 4])).toBe(16);
});

test('Given an array of non-negative integers representing the heights of vertical lines, find two lines that together with the x-axis forms a container that holds the most water.', () =>{
    expect(mostWater( [1, 2, 1])).toBe(2);
});

