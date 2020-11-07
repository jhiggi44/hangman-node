const { Response } = require("./response");

class Event {
    constructor(func) {
        this.func = func
    }

    fire(options) {
        this.func(options)
    }
}

class ResponseEvent extends Event {
    constructor(response) {
        super(() => {
            new Response(this.response).print()
        });

        this.response = response
    }
}

class ProcessGuessEvent extends Event {
    constructor(guess, guesses, wordToGuess) {
        super(() => {
            this.guesses.addGuess(this.guess);
            this.wordToGuess.charactersMatching(this.guess).forEach(character => {
                character.setDisplayToValue();
            }); 
        });

        this.guess = guess;
        this.guesses = guesses;
        this.wordToGuess = wordToGuess;
    }
}

function fromGuess(guess, game) {
    if(guess.isInvalid()) {
        return new ResponseEvent("You've entered multiple letters... Which one did you mean?")
    } 

    if (game.guesses.hasGuessed(guess)) {
        return new ResponseEvent("You've already entered that letter. Try Again!");
    }

    return new ProcessGuessEvent(guess, game.guesses, game.wordToGuess);
}

module.exports.fromGuess = fromGuess;