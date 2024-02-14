function first(arr, n = 1) {
  // return arr;
  console.log("arr", arr);
  console.log("n", n);
  if (n === 0) return [];
  else {
    return arr.slice(0, n);
  }
}
