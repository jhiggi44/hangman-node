const characterFor = require('./character').characterFor;

test('prints character from alphabet', () => {
    let letterA = characterFor("a");
    expect(letterA.display).toBe("_");

    letterA.setDisplayToValue();
    expect(letterA.display).toBe("a");
});

test('prints space character', () => {
    let spaceCharacter = characterFor(" ");
    expect(spaceCharacter.display).toBe(" ");
});