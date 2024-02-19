function closeCompare(a, b, margin) {
  // ...
  let abs = Math.abs(a - b);
  if (abs <= margin) {
    return 0;
  }
  if (a < b) return -1;
  if (a > b) return 1;
  else return 0;
}
