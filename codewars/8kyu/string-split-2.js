function array(string) {
  // TODO
  if (string.length <= 2) return null;
  let arr = string.split(",");
  arr.shift();
  arr.pop();
  return arr.length === 0 ? null : arr.join(" ");
}
