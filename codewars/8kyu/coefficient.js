function derive(coefficient, exponent) {
  let num = coefficient * exponent;
  let exp = exponent - 1 >= 1 ? exponent - 1 : 1;
  return `${num}x^${exp}`;
}
