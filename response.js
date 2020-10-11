class Response {
	constructor(message) {
		this.message = message;
	}

	print() {
		console.log(this.message);
	}
}

function response(word, maxGuesses) {
	if(word.isComplete()){ 
		return new Response(`Absolutetly magical! It was ${word}!`);
	}
	if (word.guessesMade.length >= maxGuesses){
		return new Response(`Are you sure you aren't a muggle? It was ${word}!`);
	}
	return new Response(`You have ${maxGuesses - word.guessesMade.length} guesses left.`);
}

module.exports.response = response;