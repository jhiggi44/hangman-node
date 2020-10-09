//Random word is selected and exported
// var spellArray = ["alohomora", 
// "avada kedavra", "confundo","expelliarmus",
// "levicorpus", "morsmordre", "obliviate", 
// "prior incantato", "riddikulus"]; 

var spellArray = ["avada kedavra", "prior incantato"]; 

var random = Math.floor(Math.random() * spellArray.length);
var randomSpell = spellArray[random];

exports.randomSpell = randomSpell;