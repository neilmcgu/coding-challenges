function sumMul(n, m) {
  //your idea here
  console.log("n", n);
  console.log("m", m);
  if (m <= n) {
    return "INVALID";
  }
  let sum = 0;
  let multiple = n;
  while (multiple < m) {
    sum += multiple;
    multiple += n;
  }
  return sum;
}
