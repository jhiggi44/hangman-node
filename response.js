class Response {
	constructor(message) {
		this.message = message;
	}

	print() {
		console.log(this.message);
	}
}

function responseFor(word, guessesLeft) {
	if(word.isComplete()){ 
		return new Response(`Absolutetly magical! It was ${word}!`);
	}
	if (guessesLeft <= 0){
		return new Response(`Are you sure you aren't a muggle? It was ${word.complete()}!`);
	}
	return new Response(`You have ${guessesLeft} guesses left.`);
}

module.exports.responseFor = responseFor;
module.exports.Response = Response;