// Factorial

/*

Given: a positive integer
expected: return the result of the factorial on that number
* The factorial takes the number, multiplied by the next smallets number, and so on and so forth until it reaches 1
ex: 5! => 5*4*3*2*1 = 120
since it's only a number we dont have an array to work with so we can use a for loop to decrement from the number to 1 and multiply to a product each time

*/

function factorial(number) {
  let product = 1
  for (let i = number; i > 0; i--) {
    product = product * i
    console.log(i)
  }
  return product
}

let num = 5
let fact = factorial(num)
console.log(fact)
