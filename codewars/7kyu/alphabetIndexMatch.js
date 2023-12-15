function solve(arr) {
  // we have an array of strings
  // for each string, find the number of letters that occupy the same index as they do in the alphabet
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
  ];

  // for each word
  return arr.map((word) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (alphabet.indexOf(word[i].toLowerCase()) === i) {
        count++;
      }
    }
    return count;
  });
}
