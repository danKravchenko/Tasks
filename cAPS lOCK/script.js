function longWord(word) {
    if (word.length > 10) {
        let firstLetters = word.split("").splice(0, 1)
        let lastLetters = word.split("").splice(-1, 1)
        let expectedResult = firstLetters + (word.length - 2) + lastLetters
        return expectedResult
    }

    else {
        return word
    }
}

console.log("Result of task: " + longWord("localization"))
console.log("Result of task: " + longWord("internationalization"))
console.log("Result of task: " + longWord("word"))
console.log("Result of task: " + longWord(""))
console.log("Result of task: " + longWord("1"))
