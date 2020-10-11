const response = require("./response").response;
var Word = require("./word.js").word;
const characterFor = require("./character").characterFor;

test('guessing the word', () => {
    const spellToGuess = new Word("nox");
    var maxGuesses = 5;

    ["n", "o"].forEach((letter) => {
        spellToGuess.findLetter(characterFor(letter));
        expect(response(spellToGuess, maxGuesses).message).toBe(`You have ${maxGuesses - spellToGuess.guessesMade.length} guesses left.`)
    });
    spellToGuess.findLetter(characterFor("x"));
    expect(response(spellToGuess, maxGuesses).message).toBe(`Absolutetly magical! It was ${spellToGuess}!`);
});