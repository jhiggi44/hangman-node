const { Guesses } = require("./guesses");
const { Game } = require("./game");
const { Words } = require("./words");

const words = Words.fromStrings(["avada kedavra", "prior incantato"]);
const guesses = new Guesses(15);
new Game({ words: words, guesses: guesses }).start();