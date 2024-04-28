function multiples(m, n) {
  let arr = [];
  for (let i = 1; i < m + 1; i++) {
    arr.push(i * n);
  }
  return arr;
}
