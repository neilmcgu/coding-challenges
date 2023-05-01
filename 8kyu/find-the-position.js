// find the position
// given: a letter
// return: it's position in the alphabet
// ex: position('b') => 2
// we can declare an array of letters from a-z and return the index + 1

function position(letter) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
}
