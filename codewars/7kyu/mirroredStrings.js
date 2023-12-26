function vertMirror(strng) {
  // Your code
  let smallStrings = strng.split("\n");
  let vertMirroredStrings = smallStrings.map((s) =>
    s.split("").reverse().join("")
  );
  return vertMirroredStrings.join("\n");
}
function horMirror(strng) {
  // Your code
  return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
  // Your code
  return fct(s);
}
