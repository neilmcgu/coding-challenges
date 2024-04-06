function dutyFree(normPrice, discount, hol) {
  let savings = (discount / 100) * normPrice;
  let numRequired = hol / savings;
  console.log(
    `normPrice: ${normPrice}, discount: ${discount} holiday: ${hol} savings: ${savings} ${numRequired}`
  );
  return Math.floor(numRequired);
}
