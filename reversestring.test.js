const reverseString = require("./reversestring")

test('reverse string takes in a string and returns that string reversed', () =>{
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse string takes in a string and returns that string reversed', () =>{
    expect(reverseString('OpenAI')).toBe('IAnepO');
});

test('reverse string takes in a string and returns that string reversed', () =>{
    expect(reverseString('racecar')).toBe('racecar');
});