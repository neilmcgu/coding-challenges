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
