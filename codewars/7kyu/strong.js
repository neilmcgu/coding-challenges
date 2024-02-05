function strong(n) {
  let digits = String(n)
    .split("")
    .map((e) => Number(e));
  //   foreach digit, get the factorial
  console.log(digits);
  let factorials = digits.map((dig) => fact(dig));
  console.dir(factorials);
  let sum = factorials.reduce((acc, ce) => (acc += ce), 0);

  return sum == n ? "STRONG!!!!" : "Not Strong !!";
}

function fact(n) {
  //return the factorial of n
  let num = 1;
  console.log("n", n);
  for (let i = 1; i <= n; i++) {
    console.log(i);
    num *= i;
  }
  return num;
}
