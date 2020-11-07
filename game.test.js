const { Game } = require("./game");
const { Guesses } = require("./guesses");
const { characterFor } = require('./character');

test('returns congratulation response when the word is guessed', () => {
    const guesses = new Guesses(5);
    const game = new Game({ words: ["foo"], guesses: guesses });
    game.generateWordToGuess();
    
    let guess = characterFor("f");
    expect(game.responseToGuess(guess).message).toBe(`You have ${guesses.remaining} guesses left.`);
    
    guess = characterFor("o");
    expect(game.responseToGuess(guess).message).toBe(`Absolutetly magical! It was ${game.wordToGuess}!`);
});  


test('returns correct response when there are no more guesses left', () => {
    const guesses = new Guesses(2);
    const game = new Game({ words: ["foo"], guesses: guesses });
    game.generateWordToGuess();

    let guess = characterFor("f");
    expect(game.responseToGuess(guess).message).toBe(`You have ${guesses.remaining} guesses left.`);
    
    guess = characterFor("q");
    expect(game.responseToGuess(guess).message).toBe(`Are you sure you aren't a muggle? It was ${game.wordToGuess}!`);
});