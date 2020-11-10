const { Response } = require("./response");

class Event {
    static fromGuess(guess, game) {
        if (guess.isInvalid()) return new ResponseEvent("You've entered multiple letters... Which one did you mean?");
        if (game.guesses.hasGuessed(guess)) return new ResponseEvent("You've already entered that letter. Try Again!");
        return new ProcessGuessEvent(guess, game.guesses, game.wordToGuess);
    }

    static forNextPrompt(game) {
        if (game.wordToGuess.isComplete()) { 
            return new ResponseEvent(`Absolutetly magical! It was ${game.wordToGuess}!`);
        } else if (game.guesses.remaining <= 0) {
            return new ResponseEvent(`Are you sure you aren't a muggle? It was ${game.wordToGuess.complete()}!`);
        } else {
            return new NextGuessEvent(game);
        }
    }

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
            new Response(`You guessed: ${this.guess.value}`).print();
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

class NextGuessEvent extends Event {
    constructor(game) {
        super(() => {
            new Response(`You have ${this.game.guesses.remaining} guesses left.`).print();
            new Response(this.game.guesses.toString()).print();
            this.game.prompt();
        });

        this.game = game;
    }
}

module.exports.Event = Event;