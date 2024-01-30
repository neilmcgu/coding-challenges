function parseF(s) {
  console.log(s);
  if (s === 0 || s === "0") return 0;
  return parseFloat(s) || null;
}
