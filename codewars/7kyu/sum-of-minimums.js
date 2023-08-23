// sum of minimums
// given a nested list of size m*n
// find the sum of the min values in each row
// [ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]] => 1+5+20 = 26
// so we just need to loop through the array, and foreach element in that array, find the Math.min(...element) and use that in a reduce function

function sumOfMinimums(arr) {
  let mins = arr.map((element) => Math.min(...element));
  return mins.reduce((acc, ce) => (acc += ce), 0);
}
