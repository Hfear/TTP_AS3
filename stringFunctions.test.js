const stringFunctions = require("./stringFunctions")

test('reverse string takes in a string and returns that string reversed', () =>{
    expect(stringFunctions.reverseString('hello')).toBe('olleh');
});

test('check if a string is indeed a palindrome', () =>{
    expect(stringFunctions.isPalindrome('hannah')).toBe(true);
})