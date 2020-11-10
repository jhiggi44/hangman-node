var inquirer = require("inquirer");
const { Response } = require("./response");
const { Word } = require('./word');
const { characterFor } = require('./character');
const { Event } = require("./event")

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
				Event.fromGuess(guess, this).fire();
				Event.forNextPrompt(this).fire();
			});
	}
}

module.exports.Game = Game;