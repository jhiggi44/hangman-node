const { Character, Space } = require('../character');

describe('factory', () => {
    test('returns a space character', () => {
        const character = Character.for(" ");
        expect(character instanceof Space).toBeTruthy();
    });

    test('returns a default character', () => {
        const character = Character.for("a");
        expect(character instanceof Character).toBeTruthy();
        expect(character instanceof Space).toBeFalsy();
    });
});

describe('isInvalid', () => {
    test('valid character', () => {
        expect(Character.for("a").isInvalid()).toBeFalsy();
    });

    test('invalid character', () => {
        expect(Character.for("asdf").isInvalid()).toBeTruthy();
    });
});


describe('showValue', () => {
    test('value change after show', () => {
        const character = Character.for("a");
        expect(character.display).toEqual("_");
        
        character.showValue();
        expect(character.display).toEqual("a");
    });
});

describe('isEqualTo', () => {
    test('eqaulity', () => {
        const a1 = Character.for("a");
        const a2 = Character.for("a");

        expect(a1.isEqualTo(a2)).toBeTruthy();
    });
});