function maxProduct(numbers, size) {
  //your code here
  numbers.sort((a, b) => b - a); //largest first
  let newArr = numbers.splice(0, size);
  return newArr.reduce((acc, ce) => (acc *= ce), 1);
}
