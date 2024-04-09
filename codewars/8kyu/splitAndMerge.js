function splitAndMerge(string, separator) {
  let words = string.split(" ");
  words = words.map((word) => word.split("").join(`${separator}`));
  return words.join(" ");
}
