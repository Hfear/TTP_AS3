const twosum = require("./twosum")

test('Given an array of integers nums and a target integer target, return indices of the two numbers such that they add up to the target.', () =>{
    expect(twosum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('Given an array of integers nums and a target integer target, return indices of the two numbers such that they add up to the target.', () =>{
    expect(twosum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test('Given an array of integers nums and a target integer target, return indices of the two numbers such that they add up to the target.', () =>{
    expect(twosum( [-1, -2, -3, -4, -5], -8)).toStrictEqual([2, 4]);
});
