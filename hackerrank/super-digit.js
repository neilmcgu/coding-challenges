function superDigit(n, k) {
  let num = n.toString();
  num = num.repeat(k);
  console.log("num", num);
  if (String(num).length === 1) {
    return num;
  } else {
    let sum = String(num)
      .split("")
      .reduce((acc, curr) => acc + Number(curr), 0);
    console.log("sum", sum);
    return superDigit(sum, 1);
  }
}

console.log(superDigit(9875, 4));

// objectified
// super digit
// given a number n, and another number k times to repeat n to make a bigger nummber
// add all of the digits of the bigger number together to get a sum
// if that sum is a single digit, return that sum
// otherwise add all of the digits of the sum together
// check to see if the new sum is a single digit
// rinse and repeat

const superDigit = {
  n: 0,
  k: 0,
  generateNum() {
    this.num = Number(String(this.n).repeat(this.k));
  },
  findSum() {
    let arr = String(this.num)
      .split("")
      .map((num) => Number(num));
    let sum = arr.reduce((acc, ce) => acc + ce, 0);
    return sum;
  },
  getSuperDigit() {
    let sum = this.findSum();
    if (String(sum).length > 1) {
      this.num = sum;
      return this.getSuperDigit();
    } else {
      return sum;
    }
  },
};

superDigit.n = 123;
superDigit.k = 2;
superDigit.generateNum();
console.log(superDigit.getSuperDigit());
