function toFreud(string) {
  if (string.length <= 0) {
    return "";
  }
  let words = string.split(" ");
  let str = Array(words.length).fill("sex");
  return str.join(" ");
}
