
//Run this in the command line to run the game!
var game = require("./game.js");
var Word = require("./word.js").word;
const characterFor = require("./character").characterFor;
var inquirer = require("inquirer");

var randomSpell = game.randomSpell;
// var letterGuessed;
exports.letter;

var spellToGuess = new Word(randomSpell);
var maxGuesses = 15;

function response(spellToGuess, maxGuesses) {
	if(spellToGuess.isComplete()){ 
		return `Absolutetly magical! It was ${spellToGuess}!`
	}
	if (spellToGuess.guessesMade.length >= maxGuesses){
		return `Are you sure you aren't a muggle? It was ${spellToGuess}!`;
	}
	return `You have ${maxGuesses - spellToGuess.guessesMade.length} guesses left.`
}

function whichSpell(){
	console.log(spellToGuess.toString());
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:'
		}]).then((letterInput) => {
			spellToGuess.findLetter(characterFor(letterInput.letter));
			console.log(response(spellToGuess, maxGuesses));
			whichSpell();
		});
}

//Starts game for the first time. 
whichSpell();

module.exports.response = response;