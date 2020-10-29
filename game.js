var inquirer = require("inquirer");
const { responseFor, Response } = require("./response");
const { Word } = require('./word');
const { characterFor } = require('./character');

class Game {
    constructor({ words, guesses }) {
        this.words = words;
		this.guesses = guesses;
	}
	
	generateWordToGuess() {
		var randomIndex = Math.floor(Math.random() * this.words.length);
		var randomWord = this.words[randomIndex];

		this.wordToGuess = new Word(randomWord);
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
				console.log('\n****************************************************************');
				const guess = characterFor(userInput.letter);
				console.log(guess.value)
				this.responseToGuess(guess).print();
				console.log('****************************************************************\n');
				this.prompt();
			});
	}

	responseToGuess(guess) {
		if(guess.isInvalid()) {
			return new Response("You've entered multiple letters... Which one did you mean?");
		}

		if (this.guesses.addGuess(guess)) {
			const characters = this.wordToGuess.charactersMatching(guess);
			if (characters.length) {
				characters.forEach(character => {
					character.setDisplayToValue();
				});
			}
			return responseFor(this.wordToGuess, this.guesses.remaining);
		}

		return new Response("You've already entered that letter. Try Again!");
	}
}

module.exports.Game = Game;