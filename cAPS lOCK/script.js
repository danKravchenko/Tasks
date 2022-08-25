function capsLock(str) {
    let data = str.split(" ")
    complete = []
    for (i = 0; i < data.length; i++) {
        let word = data[i];
        if (checkWord(word)) {
            for (l = 0; l < word.length; l++) {
                let letter = word.charAt(l)
                if (letter.toUpperCase() === letter) {
                    complete += letter.toLowerCase()
                } else {
                    complete += letter.toUpperCase()
                }
            }
            complete += ' '
        } else {
            complete += word + ' '
        }
    }
    str = complete
    return str
}

function checkWord(word) {
    let restOfWord = word.slice(1, word.length);
    let wrongWord = true;
    for (let l = 0; l < restOfWord.length; l++) {
        if (restOfWord.charAt(l).toUpperCase() !== restOfWord.charAt(l)) {
            wrongWord = false;
            break;
        }
    }
    return wrongWord;
}

console.log("Result of task: " + capsLock("cAPS"))
console.log("Result of task: " + capsLock("Lock"))
console.log("Result of task: " + capsLock("wHY DO wE NEED cAPS lOCK?"))
console.log("Result of task: " + capsLock("FuNkY iS nOt CaPs!"))
