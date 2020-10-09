const letter = require('./word').letter;

test('letter value is the value passed in', () => {
    let letterA = new letter("a")
    expect(letterA.value).toEqual("a");
});

test('letter defaults show to false', () => {
    let letterA = new letter("a")
    expect(letterA.show).toBe(false);
});

test('space character show is true', () => {
    let letterA = new letter(" ")
    expect(letterA.show).toBe(true);
});