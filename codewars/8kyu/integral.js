function integrate(coefficient, exponent) {
  exponent++;
  let ans = coefficient / exponent;
  return `${ans}x^${exponent}`;
}
