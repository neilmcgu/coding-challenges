// Find maximum and minimum values of a list

/*

given: a list of integers (array), the integers may be positive or negative
expected: two different functions that take in that list, and return the highest and lowest numbers in that list respectively
arrays will not be empty, all arrays will only include integers

ex: arr = [1,2,3,-4,5] -> max(arr) = 5, min(arr) = -4

sort the array in ascending or descending order based on which you want then take out the first or last of the array and return that

*/

function max(arr) {
  let sorted = arr.sort((a, b) => b - a) // sort in descending order
  return sorted[0] // the first number in the list should be the largest
}

function min(arr) {
  let sorted = arr.sort((a, b) => a - b) // ascending
  return sorted[0] // the first number in the list should be the lowest
}

let arr = [1, 2, 3, -4, 5]
let maxy = max(arr)
let miny = min(arr)

console.log(`The biggest number in the list is ${max(arr)}`)
console.log(`The smallest number in the list is ${min(arr)}`)

console.log(arr, maxy, miny)
