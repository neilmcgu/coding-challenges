function countingSort(arr) {
  let size = Math.max(...arr);
  let freqArr = new Array(size + 1).fill(0);
  for (let i = 0; i <= size; i++) {
    let count = arr.filter((e) => e === i).length;
    freqArr[i] = count;
  }

  return freqArr;
}

console.log(countingSort([1, 1, 3, 2, 1]));
