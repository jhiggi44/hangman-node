const { Character } = require('./character');

class Word {
	constructor(value) {
		this.value = value;
		this.letters = value.split("").map((character) => {
			return Character.for(character);
		});
	}

	isComplete() {
		return this.letters.filter(letter => {
			return letter.show;
		}).length == this.letters.length;
	}
	
	charactersMatching(character) {
		return this.letters.filter(letter => {
			return letter.isEqualTo(character);
		});
	}

	toString() {
		return this.letters.map((letter) => {
			return letter.display
		}).join(" ");
	}
}

module.exports.Word = Word;