'use strict';

class Character {
    constructor(value) {
        this.value = value;
        this.display = "_ ";
        this.show = false;
    }

    setDisplayToValue() {
        this.display = this.value;
        this.show = true;
    }
}

class Space extends Character {
    constructor(value) {
        super(value)
        this.display = value;
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