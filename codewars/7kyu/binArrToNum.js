const binaryArrayToNumber = (arr) => {
  // your code
  console.log(arr);
  console.log(arr.length);
  let total = 0;
  let reverse = arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    let pow = Math.pow(2, i);
    let add = reverse[i] * pow;
    total = total + add;
  }
  return total;
};
