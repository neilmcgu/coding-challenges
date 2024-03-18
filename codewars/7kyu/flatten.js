function flattenAndSort(array) {
  // Good luck, brave code warrior!
  let newArr = [];
  array.forEach((arr) => {
    arr.forEach((s) => {
      newArr.push(s);
    });
  });
  return newArr.sort((a, b) => a - b);
}
