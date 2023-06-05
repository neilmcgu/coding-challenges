// create a function to capitalize all the words in a sentence
// ex: "This is a sentence" -> "This Is A Sentence"
const capitalizeWords = function () {
    return this.split(' ')
      .map( word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
  };