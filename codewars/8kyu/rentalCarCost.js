function rentalCarCost(d) {
  // Your solution here
  let total = 0;
  for (let i = 0; i < d; i++) {
    total += 40;
  }
  if (d >= 7) {
    total -= 50;
  } else if (d >= 3) {
    total -= 20;
  }

  return total;
}
