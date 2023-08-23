// write a function that accepts two integers
// returns the remainder of dividing the larger value by the smaller value

function findRemainder(num1, num2) {
  let larger = Math.max(num1, num2);
  let smaller = Math.min(num1, num2);

  let remainder = larger % smaller;

  return remainder;
}
