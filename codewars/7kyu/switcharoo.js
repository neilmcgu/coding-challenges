function vowel2index(str) {
  //code me
  let vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.split("");
  let output = strArr.map((char, index, array) => {
    if (vowels.includes(char.toLowerCase())) {
      return index + 1;
    } else {
      return char;
    }
  });
  return output.join("");
}
