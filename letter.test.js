const characterFor = require('./character').characterFor;

test('prints character from alphabet', () => {
    let letterA = characterFor("a");
    expect(letterA.printLetter()).toBe("_ ");

    letterA.show = true;
    expect(letterA.printLetter()).toBe("a");
});

test('prints space character', () => {
    let spaceCharacter = characterFor(" ");
    expect(spaceCharacter.printLetter()).toBe(" ");
});