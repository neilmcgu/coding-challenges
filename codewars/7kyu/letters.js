function longest(s1, s2) {
  // your code
  let str = s1 + s2;
  str = str.split("").reverse();
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) === i) {
      chars.push(str[i]);
    }
  }

  return chars.sort().join("");
}
