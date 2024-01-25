// duplicate

function duplicate(arr) {
  let arr1 = [];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr1.push(arr[j]);
    }
  }
  let arr2 = [];
  arr2.push(arr);
  arr2.push(arr);

  return [arr1, arr2];
}

let arr = [1, 2, 3, 4, 5];
console.log(duplicate(arr));
