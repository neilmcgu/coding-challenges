function adjacentElementsProduct(array) {
  // max product
  let maxProduct = array[0] * array[1];
  for (let i = 0; i < array.length - 1; i++) {
    let temp = array[i] * array[i + 1];
    maxProduct = Math.max(maxProduct, temp);
  }
  return maxProduct;
}
