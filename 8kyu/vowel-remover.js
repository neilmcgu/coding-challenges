// vowel remover
// take in a string and return the same string without the vowels
// note: only remove lowercase vowels

// given a string of upper and lower case characters
// return the same string without any lower case vowels
// a e i o u are considered vowels
// can just turn the string into an array and filter out the vowels

function shortcut(string) {
  let vowels = ["a", "e", "i", "o", "u"]
  return string
    .split("")
    .filter((char) => !vowels.includes(char))
    .join("")
}
