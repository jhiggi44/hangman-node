var inquirer = require("inquirer");
const { Response } = require("./response");
const { Word } = require('./word');
const { characterFor } = require('./character');
const { fromGuess, nextPrompt } = require("./event")

class Game {
    constructor({ words, guesses }) {
        this.words = words;
		this.guesses = guesses;
	}
	
	generateWordToGuess() {
		const atRandom = Math.floor(Math.random() * this.words.length);
		this.wordToGuess = new Word(this.words[atRandom]);
	}
 
	start() {
		this.generateWordToGuess();
		this.prompt();
	}

	prompt() {
		console.log(this.wordToGuess.toString());
		inquirer.prompt([{
			name: 'letter',
			type: 'text',
			message: 'Enter a letter:'
			}]).then((userInput) => {
				const guess = characterFor(userInput.letter);
				fromGuess(guess, this).fire();
				nextPrompt(this).fire();
			});
	}
}

module.exports.Game = Game;