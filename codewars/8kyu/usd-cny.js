// create a function that converts USD to CNY

function usdcny(usd) {
  let cny = "";
  let num = usd * 6.75;
  num = num.toFixed(2);
  cny = `${num} Chinese Yuan`;
  return cny;
}
