// Take the first N elements

// given: an array of elements that is not empty and a positive integer n
// return: the first n elements of the array
// ex: takeN([1,2,3,4,5],3) => [1,2,3]
// use the array.slice() method to grab the first three elements
// array.slice(start,end) returns a coppy of the array starting at start and ending at end. note it does not include the ending element

function takeN(arr, n) {
  return arr.slice(0, 3)
}
