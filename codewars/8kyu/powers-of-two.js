function powersOfTwo(n) {
  let list = [];
  for (let i = 0; i <= n; i++) {
    list.push(Math.pow(2, i));
  }
  return list;
}
