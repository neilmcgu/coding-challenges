function nbDig(n, d) {
  // your code
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let nums = String(Math.pow(i, 2)).split("");
    nums.forEach((dig) => {
      if (Number(dig) == d) {
        count++;
      }
    });
  }
  return count;
}
