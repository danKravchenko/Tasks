let word = 'FuNkY iS nOt CaPs!'
let newWord = word.split(" ")
complete = []
newWord.forEach(capsLockTests)
function capsLockTests(index) {
    word = index
    if (word.length > 1) {
        if (word.substring(0) == word.toUpperCase().substring(0)) {
            newWord = word.toLowerCase().substring(0)
            complete.push(newWord)
            return complete
        }

        if (word.substring(0, 1) == word.toUpperCase().substring(0, 1)) {
            newWord = word
            complete.push(newWord)
            return complete
        }

        if (word.substring(1) == word.toUpperCase().substring(1)) {
            newWord = word.toUpperCase(0, 1).substring(0, 1) + word.toLowerCase().substring(1)
            complete.push(newWord)
            return complete
        }

        if (word.substring(1, 2) == word.toUpperCase().substring(1, 2)) {
            newWord = word
            complete.push(newWord)
            return complete
        }
    }
}
console.log('solution of task: ' + complete.join(' '))


