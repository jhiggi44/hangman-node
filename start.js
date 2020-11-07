const { Guesses } = require("./guesses");
const { Game } = require("./game");

var spellArray = ["avada kedavra", "prior incantato"]; 
const guesses = new Guesses(15);
const game = new Game({ words: spellArray, guesses: guesses });

game.start();