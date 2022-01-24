function reverseVowels(message) {
    const vowels = message.match(/[aeiou]/gi);
    return message.replace(/[aeiou]/gi, vowel => vowels.pop());

}

module.exports = reverseVowels
