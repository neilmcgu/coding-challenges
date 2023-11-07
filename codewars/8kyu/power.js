function numberToPower(number, power) {
  console.info(Math.log2(1024));
  // Code here
  console.log(number, power);
  let output = number;
  if (power == 0) return 1;
  for (let i = 0; i < power - 1; i++) {
    output *= number;
  }
  console.log("output ", output);
  return output;
}
