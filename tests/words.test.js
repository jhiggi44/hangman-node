const { Words } = require("../words")
const { Word } = require("../word");

test('converts a list of strings to words', () => {
    const words = Words.fromStrings(["foo", "bar"])
    expect(words[0]).toEqual(new Word("foo"));
    expect(words[1]).toEqual(new Word("bar"));
});