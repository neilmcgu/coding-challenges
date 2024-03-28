//return price without vat
function excludingVatPrice(price) {
  // your code
  if (price == null) return -1;
  return Math.round((price / 115) * 100 * 100) / 100;
  //   return 0;
}
