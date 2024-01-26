function persistence(num, counter = 0) {
  //code me
  let digits = String(num).length;

  console.log(digits);

  if (digits == 1) return counter;
  else if (digits > 1) {
    let mult = String(num)
      .split("")
      .map((a) => Number(a))
      .reduce((acc, ce) => acc * ce, 1);
    console.log(mult);
    counter++;
    return persistence(mult, counter);
  } else {
    return "invalid input";
  }
}
