
//Run this in the command line to run the game!
var game = require("./game.js");
var Word = require("./word.js").word;
var inquirer = require("inquirer");

var randomSpell = game.randomSpell;
// var letterGuessed;
exports.letter;

var spellToGuess = new Word(randomSpell);
var maxGuesses = 15;

function whichSpell(){
	console.log(spellToGuess.toString());
	//When user runs out of guesses, message is logged.
	if (spellToGuess.guessesMade.length >= maxGuesses){
		console.log("Oopsie... Are you sure you aren't a muggle? It was " + randomSpell + "!");
		return;
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:'
		}]).then(function(letterInput){
				var letter = letterInput.letter; 
				//check letter
				spellToGuess.findLetter(letter);
				//when user wins, then message is loggec.
					if(spellToGuess.isComplete()){ 
					console.log('Absolutely magical! ' + spellToGuess.toString() + ' it is!');
					// breaks from prompt
					return;
					}
				console.log('You have ' + (maxGuesses - spellToGuess.guessesMade.length) + ' guesses left.')
				//keeps brining the word/guesses back to command line
				whichSpell(); 
				}
  );
}

//Starts game for the first time. 
whichSpell();