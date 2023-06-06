/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  // Write your code here
  // given a string s, return a new string in which each letter in s is offset by the value of k
  // example: a with an offset of 1 becomes b
  // ex: s = 'abc', k = 3, outpu => 'def'
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let output = s.split("").map((char) => {
    if (char === "-") return "-";
    let uppercase = false;
    if (char !== char.toLowerCase()) uppercase = true;

    if (alphabet.includes(char.toLowerCase())) {
      let index = alphabet.indexOf(char.toLowerCase());
      index += k;
      if (index > 25) {
        index = index % 26;
      }
      return uppercase ? alphabet[index].toUpperCase() : alphabet[index];
    } else {
      return char;
    }
  });

  return output.join("");
}

console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5));
