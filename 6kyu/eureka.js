function sumDigPow(a, b) {
  // Your code here
  // take in a range of numbers from a to b
  // for each number in that range:
  //  split the number into it's digits and it's index+1
  //  raise the number to the power of index+1
  //  add all the digits together
  //  if the result = the original number, add to output array

  // ex: [1,10] => from 1 to 10, all numbers except 9 match the criteria, ex: 1^1 = 1...9^1 = 9 so the answer = [1,2,...,9]
  let output = []
  for (let i = a; i <= b; i++) {
    // including b
    let numArray = String(i).split("")
    console.log("numArray", numArray)
    // use reduce instead of forEach
    let sum = 0
    numArray.forEach((digit, index) => {
      digit = Number(digit)
      let power = Math.pow(digit, index + 1)
      console.log("power", power)
      sum += power
    })
    console.log("sum", sum)
    if (sum === i) {
      // it's a match
      output.push(i)
    }
  }
  return output
}
