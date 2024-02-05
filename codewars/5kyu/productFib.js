function productFib(prod) {
  // ...
  let n = 0;
  let nPlusOne = 1;
  for (let i = 0; i < prod; i++) {
    if (n * nPlusOne === prod) return [n, nPlusOne, true];
    else if (n * nPlusOne > prod) return [n, nPlusOne, false];
    nPlusOne += n;
    n = nPlusOne - n;
  }
}
