class Character {
    static for(value) {
        if (value === " ") {
            return new Space(value);
        }
        return new Character(value);
    }

    constructor(value) {
        this.value = value.toLowerCase();
        this.display = "_";
        this.show = false;
    }

    isInvalid() {
        return this.value.length > 1
    }

    setDisplayToValue() {
        this.display = this.value;
        this.show = true;
    }

    isEqualTo(character) {
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

module.exports.Character = Character;