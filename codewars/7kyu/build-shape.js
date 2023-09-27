function generateShape(integer) {
  let string = "";
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      string += "+";
    }
    if (i < integer - 1) string += "\n";
  }
  return string;
}
