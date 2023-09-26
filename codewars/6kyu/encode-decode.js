// Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

function encode(string) {
  const vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  return string
    .split("")
    .map((char) => vowels[char] || char)
    .join("");
}

function decode(string) {
  const nums = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };

  return string
    .split("")
    .map((char) => nums[char] || char)
    .join("");
}

let string = "hello there";
let encoded = encode(string);
let decoded = decode(string);
console.log(string);
console.log(encoded);
console.log(decoded);
