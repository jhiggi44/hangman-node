const { expect } = require('@jest/globals');
const Word = require('./word').word;
const characterFor = require('./character').characterFor;

test('word is not complete', () => {
    const spell = new Word("expelliarmus");
    expect(spell.isComplete()).toBe(false);
});

test('word is complete', () => {
    const spell = new Word("expelliarmus");
    spell.letters.forEach(letter => {
        letter.show = true;
    });
    expect(spell.isComplete()).toBe(true);
});

test('guess wrong letter', () => {
    const spell = new Word("lumos");
    const guess = characterFor("z");
    spell.findLetter(guess);

    expect(spell.guessesMade).toEqual("z");
    expect(spell.toString()).toEqual("_ _ _ _ _");
});

test('guess right letter', () => {
    const spell = new Word("lumos");
    const guess = characterFor("U");
    spell.findLetter(guess);

    expect(spell.guessesMade).toEqual("u");
    expect(spell.toString()).toEqual("_ u _ _ _");
});