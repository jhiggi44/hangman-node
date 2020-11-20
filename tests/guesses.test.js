const { Guesses } = require("../guesses");
const { Character } = require("../character");

describe('#constructor', () => {
    test('initial remaining value', () => {
        const maxGuesses = 5;
        const guesses = new Guesses(maxGuesses);
        expect(guesses.remaining).toEqual(maxGuesses);
    });

    test('initial list of guesses', () => {
        const guesses = new Guesses(5);
        expect(guesses.list).toEqual([]);
    });
});

describe('#addGuess', () => {
    test('adds a guess to the list', () => {
        const guesses = new Guesses(5);
        const guess = Character.for("a");
        guesses.addGuess(guess)
        expect(guesses.list).toEqual([guess]);
    });

    test('subtracts 1 from remaining guesses', () => {
        const maxGuesses = 5;
        const guesses = new Guesses(maxGuesses);
        guesses.addGuess(Character.for("a"))
        expect(guesses.remaining).toEqual(maxGuesses - 1);
    });
});

describe('#hasGuessed', () => {
    test('is false when guess is not in the list', () => {
        const guesses = new Guesses(5);
        const guess = Character.for("a");
        expect(guesses.hasGuessed(guess)).toBeFalsy();
    });

    test('is true when guess is in the list', () => {
        const guesses = new Guesses(5);
        const guess = Character.for("a");
        guesses.addGuess(guess);
        expect(guesses.hasGuessed(guess)).toBeTruthy();
    });
});

describe('#toString', () => {
    test('converts Guesses to string representation', () => {
        const guesses = new Guesses(5);

        ["a", "b", "c"].map(character => Character.for(character))
        .forEach(guess => {
            guesses.addGuess(guess);
        });

        expect(guesses.toString()).toEqual("Guesses: c, b, a\n");
    });
});