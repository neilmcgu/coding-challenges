function evenNumbers(array, number) {
  let newArr = [];
  let even = array.filter((e) => e % 2 == 0).reverse();
  let sliced = even.slice(0, number).reverse();
  return sliced;
}
