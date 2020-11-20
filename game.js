var inquirer = require("inquirer");
const { Character } = require('./character');
const { Event } = require("./event")

class Game {
    constructor({ words, guesses }) {
        this.words = words;
		this.guesses = guesses;
	}
	
	generateWordToGuess() {
		const atRandom = Math.floor(Math.random() * this.words.length);
		this.wordToGuess = this.words[atRandom];
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
				const guess = Character.for(userInput.letter);
				Event.fromGuess(guess, this).fire();
				Event.forNextPrompt(this).fire();
			});
	}
} 

module.exports.Game = Game;