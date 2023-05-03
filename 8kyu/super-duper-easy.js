// super duper easy
// given a number (if a number is not provided return 'Error')
// expected multiply the number by 50, add 6, and return the result

function problem(x) {
  if (typeof x !== "number") {
    return "Error"
  }

  let result = x * 50
  result += 6

  return result
}
