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
			return value.equals(character);
		}).length;
	}
}

module.exports.Guesses = Guesses;