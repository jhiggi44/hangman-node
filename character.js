'use strict';

class Character {
    constructor(value) {
        this.value = value.toLowerCase();
        this.display = "_";
        this.show = false;
    }

    isInvalid() {
        this.value.length > 1
    }

    setDisplayToValue() {
        this.display = this.value;
        this.show = true;
    }

    equals(character) {
       return this.value === character.value 
    }
}

class Space extends Character {
    constructor(value) {
        super(value)
        this.display = this.value;
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