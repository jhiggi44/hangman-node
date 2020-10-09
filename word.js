function letter(value) {
	this.value = value;
	this.show = false;
	if (this.value == ' ') 
		this.show = true;
}

// prototype adds a function to existing object
letter.prototype.printLetter = function() {
	// if the letter is a space, return the space
	if (this.show) {
		return this.value;
	}
	// otherwise return 
	return "_ ";
}

// constructor for spell
function spell(value){
	this.value = value;
	this.letters = [];
	this.guessesMade = "";
	for(var i = 0; i < this.value.length; i++) {
		this.letters.push(new letter(this.value[i]));
	}
};

// 
spell.prototype.isComplete = function(){
	for(var i = 0; i < this.letters.length; i++){

		if(!this.letters[i].show) return false;
	}
	return true;
}

spell.prototype.findLetter = function(letter){
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
		this.letters[i].show = true;
		}
	}

	console.log('************************\n');
};

spell.prototype.toString = function(){
  var output = "";
  for(var i=0; i<this.letters.length; i++){
    output += this.letters[i].printLetter();
  }
  return output;
}

module.exports.lettersInSpell = spell;
module.exports.letter = letter;
