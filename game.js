var inquirer = require("inquirer");

const response = require("./response").response;
const characterFor = require('./character').characterFor;
var Word = require("./word.js").word;

//Random word is selected and exported
// var spellArray = ["alohomora", 
// "avada kedavra", "confundo","expelliarmus",
// "levicorpus", "morsmordre", "obliviate", 
// "prior incantato", "riddikulus"]; 

var spellArray = ["avada kedavra", "prior incantato"]; 

var random = Math.floor(Math.random() * spellArray.length);
var randomSpell = spellArray[random];

var spellToGuess = new Word(randomSpell);
var maxGuesses = 15;

function whichSpell(){
	console.log(spellToGuess.toString());
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:'
		}]).then((letterInput) => {
			console.log('\n****************************************************************');
			spellToGuess.findLetter(characterFor(letterInput.letter));
			response(spellToGuess, maxGuesses).print();
			console.log('****************************************************************\n');
			whichSpell();
		});
}

whichSpell();