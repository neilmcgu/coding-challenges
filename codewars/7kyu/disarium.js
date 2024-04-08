function disariumNumber(n) {
  //your code here
  let arr = String(n).split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = Math.pow(Number(arr[i]), i + 1);
    sum += num;
  }
  return sum == n ? "Disarium !!" : "Not !!";
}
