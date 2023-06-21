const longestSub = require("./longestSub")

test('Given a string str, find the length of the longest substring without repeating characters.', () =>{
    expect(longestSub('abcabcbb')).toBe(3);
});

test('Given a string str, find the length of the longest substring without repeating characters.', () =>{
    expect(longestSub('bbbbb')).toBe(1);
});

test('Given a string str, find the length of the longest substring without repeating characters.', () =>{
    expect(longestSub('pwwkew')).toBe(2);
});