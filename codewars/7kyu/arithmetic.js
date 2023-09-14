// make an arithmetic function

function arithmetic(a, b, operator) {
  // given two numbers and an operator
  // return the result of the operation
  const operations = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };

  return operations[operator];
}

console.log(arithmetic(2, 4, "divide"));
