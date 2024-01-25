// super market queue

let arr = [5, 3, 4];
let num = 1;
console.log(queueTime(arr, num));

arr = [10, 2, 3, 3];
num = 2;
console.log(queueTime(arr, num));

arr = [2, 3, 10];
num = 2;
console.log(queueTime(arr, num));

function queueTime(arr = [], num = 0) {
  let totalTime = 0; //total time for all customers to check out
  if (arr.length < 1) return "invalid input";
  if (arr.length == 1 || num > arr.length) totalTime = Math.max(...arr);

  let counter = new Array(num).fill(0);

  for (let i = 0; i < arr.length; i++) {
    // console.log("unsorted:");
    // console.dir(counter);
    counter[0] += arr[i];
    // console.log("sorting");
    counter.sort((a, b) => a - b);
    // console.dir(counter);
  }

  return Math.max(...counter);
}
