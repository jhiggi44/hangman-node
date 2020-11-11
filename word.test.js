const { expect } = require('@jest/globals');
const { Word } = require('./word');
const { Character } = require('./character');

describe('isComplete', () => {
    test('when the word is not complete', () => {
        const word = new Word("expelliarmus");
        expect(word.isComplete()).toBeFalsy;
    });

    test('when the word is complete', () => {
        const word = new Word("expelliarmus");
        word.letters.forEach(letter => {
            letter.show = true;
        });
        expect(word.isComplete()).toBeTruthy;
    });
});

describe('charactersMatching', () => {
    test('when the character has matches', ()=> {
        const word = new Word("expelliarmus");
        const guess = Character.for("e");
        const matchingCharacters = word.charactersMatching(guess);
        expect(matchingCharacters.length).toEqual(2);
        expect(matchingCharacters).toContainEqual(guess);
    });

    test('when the character has no matches', ()=> {
        const word = new Word("expelliarmus");
        const guess = Character.for("f");
        const matchingCharacters = word.charactersMatching(guess);
        expect(matchingCharacters.length).toEqual(0);
    });
});

describe('toString', () => {
    test('shows only characters that are meant to be shown', ()=> {
        const word = new Word("foo");
        
        word.charactersMatching(Character.for("o")).forEach((character) => {
            character.setDisplayToValue();
        });

        expect(word.toString()).toBe("_ o o");
    });
});