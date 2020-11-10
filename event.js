const { Message } = require("./message");

class Event {
    static fromGuess(guess, game) {
        if(guess.isInvalid()) return new MessageEvent("You've entered multiple letters... Which one did you mean?");
        if (game.guesses.hasGuessed(guess)) return new MessageEvent("You've already entered that letter. Try Again!");
        return new ProcessGuessEvent(guess, game.guesses, game.wordToGuess);
    }

    static forNextPrompt(game) {
        if (game.wordToGuess.isComplete()) { 
            return new MessageEvent(`Absolutetly magical! It was ${game.wordToGuess.value}!`);
        } else if (game.guesses.remaining <= 0) {
            return new MessageEvent(`Are you sure you aren't a muggle? It was ${game.wordToGuess.value}!`);
        } else {
            return new NextGuessEvent(game);
        }
    }

    fire() {
        this.func();
    }
}

class MessageEvent extends Event {
    constructor(response) {
        super();
        this.response = response;
    }

    func() {
        new Message(this.response).print();
    }
}

class ProcessGuessEvent extends Event {
    constructor(guess, guesses, wordToGuess) {
        super();
        this.guess = guess;
        this.guesses = guesses;
        this.wordToGuess = wordToGuess;
    }

    func() {
        new Message(`You guessed: ${this.guess.value}`).print();
        this.guesses.addGuess(this.guess);
        this.wordToGuess.charactersMatching(this.guess).forEach(character => {
            character.setDisplayToValue();
        });
    }
}

class NextGuessEvent extends Event {
    constructor(game) {
        super();
        this.game = game;
    }

    func() {
        new Message(`You have ${this.game.guesses.remaining} guesses left.`).print();
        new Message(this.game.guesses.toString()).print();
        this.game.prompt();
    }
}

module.exports.Event = Event;