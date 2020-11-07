const characterFor = require('./character').characterFor;

class Word {
	constructor(value) {
		this.value = value;
		this.letters = value.split("").map((character) => {
			return characterFor(character);
		});
	}

	isComplete() {
		return this.letters.filter(letter => {
			return letter.show;
		}).length == this.letters.length;
	}

	complete() {
		this.letters.forEach(letter => {
			letter.setDisplayToValue();
		});

		return this;
	}
	
	charactersMatching(character) {
		return this.letters.filter(letter => {
			return letter.equals(character);
		});
	}

	toString() {
		return this.letters.map((letter) => {
			return letter.display
		}).join(" ");
	}
}

module.exports.Word = Word;