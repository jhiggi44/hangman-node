const { expect } = require('@jest/globals');

const word = require('./word').lettersInSpell;

test('word is not complete', () => {
    const spell = new word("expelliarmus");
    expect(spell.isComplete()).toBe(false);
});

test('word is complete', () => {
    const spell = new word("expelliarmus");
    spell.letters.forEach(letter => {
        letter.show = true;
    });
    expect(spell.isComplete()).toBe(true);
});

test('guess wrong letter in word', () => {
    const spell = new word("lumos");
    spell.findLetter("z");

    expect(spell.guessesMade).toEqual("z");
    expect(spell.toString()).toEqual("_ _ _ _ _ ");
});

test('guess right letter in word', () => {
    const spell = new word("lumos");
    spell.findLetter("u");

    expect(spell.guessesMade).toEqual("u");
    expect(spell.toString()).toEqual("_ u_ _ _ ");
});