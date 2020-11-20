const { Word } = require('./word');

class Words {
    static fromStrings(words) {
        return words.map(word => new Word(word))
    }
}

module.exports.Words = Words;