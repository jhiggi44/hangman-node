const characterFor = require('./character').characterFor;

class Word {
	constructor(value) {
		this.value = value;
		this.letters = [];
		this.guessesMade = "";
		for(var i = 0; i < this.value.length; i++) {
			this.letters.push(characterFor(this.value[i]));
		}
	}

	isComplete(){
		for(var i = 0; i < this.letters.length; i++){
	
			if(!this.letters[i].show) return false;
		}
		return true;
	}

	findLetter(letter){
		if(letter.length > 1) {
			console.log('1************************\n');
			console.log("You've entered multiple letters... Which one did you mean?");
			return "Multiple";
		}
	
		console.log("find letter: " + letter);
		// false
		var lowerLetter = letter.toLowerCase();
		if (this.guessesMade.indexOf(lowerLetter) != -1) {
			console.log('2************************\n');
			console.log("You've already entered that letter. Try Again!");
			return "Duplicate";
		} 
		//Saves guesses so duplicate guesses don't subtract from guesses left.
		this.guessesMade += lowerLetter;
		for(var i=0; i<this.letters.length;i++){
			if(this.letters[i].value.toLowerCase() == lowerLetter){
			this.letters[i].setDisplayToValue();
			}
		}
	
		console.log('************************\n');
	};

	toString(){
		var output = "";
		for(var i=0; i<this.letters.length; i++){
		  output += this.letters[i].display;
		}
		return output;
	}
}

module.exports.word = Word;