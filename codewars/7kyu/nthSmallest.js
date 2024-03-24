function nthSmallest(arr, pos) {
  //your code here
  let sorted = arr.sort((a, b) => a - b);
  return sorted[pos - 1];
}
