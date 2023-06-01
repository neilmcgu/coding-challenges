// given an array of integers where all elements but one occur twice, find the unique element

// ex: a = [1,2,3,4,3,2,1] => 4

function lonelyInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return arr[i];
  }
}

let a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyInteger(a));
