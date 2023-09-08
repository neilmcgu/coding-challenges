function bump(x) {
  let bumbs = x.split("").filter((char) => char === "n");
  let num = bumbs.length;
  return num <= 15 ? "Woohoo!" : "Car Dead";
}
