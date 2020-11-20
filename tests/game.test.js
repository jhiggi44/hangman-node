const { Game } = require("../game");
const { Guesses } = require("../guesses");
const { Word } = require("../word");

test('generates a word to guess', () => {
    const guesses = new Guesses(5);
    const word = new Word("word")
    const game = new Game({ words: [word], guesses: guesses });
    game.generateWordToGuess();
    
    expect(game.wordToGuess).toEqual(word);
});