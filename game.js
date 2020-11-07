var inquirer = require("inquirer");
const { Response } = require("./response");
const { Word } = require('./word');
const { characterFor } = require('./character');
const { fromGuess } = require("./event")

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
				console.log('\n****************************************************************');
				const guess = characterFor(userInput.letter);
				console.log(guess.value);

				fromGuess(guess, this).fire()

				this.response().print()
				console.log(this.guesses.list)
				console.log('****************************************************************\n');
				this.prompt();
			});
	}

	response() {
		if(this.wordToGuess.isComplete()){ 
			return new Response(`Absolutetly magical! It was ${this.wordToGuess}!`);
		}

		if (this.guesses.remaining <= 0){
			return new Response(`Are you sure you aren't a muggle? It was ${this.wordToGuess.complete()}!`);
		}

		return new Response(`You have ${this.guesses.remaining} guesses left.`);
	}
}

module.exports.Game = Game;