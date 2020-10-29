const { expect } = require('@jest/globals');
const { Word } = require('./word');
const characterFor = require('./character').characterFor;

test('word is not complete', () => {
    const word = new Word("expelliarmus");
    expect(word.isComplete()).toBe(false);
});

test('word is complete', () => {
    const word = new Word("expelliarmus");
    word.letters.forEach(letter => {
        letter.show = true;
    });
    expect(word.isComplete()).toBe(true);
});

test('matching characters', () => {
    const word = new Word("expelliarmus");
    const guess = characterFor("l");
    const matchingCharacters = word.charactersMatching(guess);
    matchingCharacters.forEach(char => {
        char.setDisplayToValue();
    });

    expect(matchingCharacters.length).toEqual(2);
    expect(word.toString()).toBe("_ _ _ _ l l _ _ _ _ _ _")
});