class Guesses {
	constructor(maxGuesses) {
		this.remaining = maxGuesses;
		this.list = [];
	}

	addGuess(character) {
		this.list.unshift(character);
		this.remaining -= 1;
	}

	hasGuessed(character) {
		return this.list.filter(value => {
			return value.isEqualTo(character);
		}).length;
	}

	toString() {
		return "Guesses: " + this.list.map((character) => {
			return character.value;
		}).join(", ") + "\n";
	}
}

module.exports.Guesses = Guesses;