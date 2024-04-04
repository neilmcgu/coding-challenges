function overTheRoad(address, n) {
  //code here
  let evens = [];
  let odds = [];
  for (let i = 1; i <= n * 2; i++) {
    if (i % 2 == 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  evens.reverse();
  let addressIndex;
  if (address % 2 == 0) {
    addressIndex = evens.indexOf(address);
    return odds[addressIndex];
  } else {
    addressIndex = odds.indexOf(address);
    return evens[addressIndex];
  }
}
