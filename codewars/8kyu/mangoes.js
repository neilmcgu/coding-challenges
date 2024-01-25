function mango(quantity, price) {
  let totalCost = quantity * price;
  let threes = Math.floor(quantity / 3);
  totalCost -= threes * price;
  return totalCost;
}
