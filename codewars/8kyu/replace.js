function replace(s) {
  //coding and coding....
  let vowels = "aeiouAEIOU".split("");

  return s
    .split("")
    .map((char) => (vowels.includes(char) ? "!" : char))
    .join("");
}
