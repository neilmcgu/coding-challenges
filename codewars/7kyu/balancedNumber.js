function balancedNum(number) {
  console.log(number);
  let left, right;
  if (String(number).length <= 2) {
    return "Balanced";
  }
  let digits = String(number)
    .split("")
    .map((d) => Number(d));
  if (String(number).length % 2 !== 0) {
    let mid = Math.floor(String(number).length / 2);
    console.log(digits);
    left = digits.slice(0, mid);
    right = digits.slice(mid + 1);
  } else {
    let mid = String(number).length / 2;
    left = digits.slice(0, mid - 1);
    right = digits.slice(mid + 1);
  }
  console.log("left", left);
  console.log("right", right);
  let leftSum = left.reduce((acc, ce) => acc + ce, 0);
  let rightSum = right.reduce((acc, ce) => acc + ce, 0);

  return leftSum == rightSum ? "Balanced" : "Not Balanced";
}
