
//Run this in the command line to run the game!
var game = require("./game.js");
var lettersInSpell = require("./word.js");
var inquirer = require("inquirer");
var randomSpell = game.randomSpell;
var letterGuessed;
exports.letter;

var mySpell = new lettersInSpell.lettersInSpell(game.randomSpell);
var maxGuesses = 15;

function whichSpell(){
	console.log(mySpell.toString());
	//When user runs out of guesses, message is logged.
	if (mySpell.guessesMade.length >= maxGuesses){
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
				mySpell.findLetter(letter);
				//when user wins, then message is loggec.
					if(mySpell.isComplete()){ 
					console.log('Absolutely magical! ' + mySpell.toString() + ' it is!');
					return;
					}
				console.log('************************\n');
				console.log('You have ' + (maxGuesses - mySpell.guessesMade.length) + ' guesses left.')
				//keeps brining the word/guesses back to command line
				whichSpell(); 
				}
  );
}

//Starts game for the first time. 
whichSpell();