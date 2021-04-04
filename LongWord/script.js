let ourWord = 'internationalization'

if (ourWord.length > 10) {
  let lengthWord = ourWord.length - 2 // отнимаем два символа, не считая первый и последний
  let result = ourWord.substring(0, 1) + lengthWord + ourWord.substring(ourWord.length - 1)
  console.log('solution of task: ' + result)
}
else {
  console.log('solution of task: ' + ourWord)
}

