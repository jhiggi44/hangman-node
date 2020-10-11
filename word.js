const characterFor = require('./character').characterFor;

class Word {
	constructor(value) {
		this.value = value;
		this.letters = value.split("").map((character) => {
			return characterFor(character);
		});
		this.guessesMade = "";
	}

	isComplete(){
		for(var i = 0; i < this.letters.length; i++){
			if(!this.letters[i].show) return false;
		}
		return true;
	}

	findLetter(character){
		if(character.isInvalid()) {
			console.log('1************************\n');
			console.log("You've entered multiple letters... Which one did you mean?");
			return "Multiple";
		}
	
		console.log("find letter: " + character);
		if (this.guessesMade.indexOf(character.value) != -1) {
			console.log('2************************\n');
			console.log("You've already entered that letter. Try Again!");
			return "Duplicate";
		} 
		//Saves guesses so duplicate guesses don't subtract from guesses left.
		this.guessesMade += character.value;
		this.letters.forEach(letter => {
			if(letter.equals(character)) {
				letter.setDisplayToValue();
			}
		});
	
		console.log('************************\n');
	};

	toString(){
		return this.letters.map((letter) => {
			return letter.display
		}).join(" ");
	}
}

module.exports.word = Word;