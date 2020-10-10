'use strict';

class Character {
    constructor(value) {
        this.value = value;
        this.show = false;
    }

    printLetter() {
        if (this.show) {
            return this.value;
        }
        return "_ ";
    }
}

class Space extends Character {
    constructor(value) {
        super(value)
        this.show = true;
    }
}

function characterFor(value) {
    if (value === " ") {
        return new Space(value);
    }
    return new Character(value);
}

module.exports.characterFor = characterFor;