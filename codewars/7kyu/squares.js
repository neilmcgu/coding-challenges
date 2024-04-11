function squares(x, n) {
  if (n <= 0) return [];
  let squares = [x];
  let num = x;
  for (let i = 1; i < n; i++) {
    num = Math.pow(num, 2);
    squares.push(num);
  }
  return squares;
}
