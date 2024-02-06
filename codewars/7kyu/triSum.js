function maxTriSum(numbers) {
  //your code here
  let sorted = numbers.sort((a, b) => b - a);
  sorted = sorted.filter((e, i, arr) => arr.indexOf(e) == i);
  return sorted.slice(0, 3).reduce((acc, ce) => acc + ce, 0);
}
