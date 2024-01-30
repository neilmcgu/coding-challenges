function cubeOdd(arr) {
  // insert code here >.<
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== `number`) return undefined;
  }
  let cubed = arr.map((e) => Math.pow(e, 3));
  console.dir(cubed);
  let odds = cubed.filter((e) => e % 2 !== 0);
  console.dir(odds);

  return odds.reduce((acc, ce) => (acc += ce), 0);
}
