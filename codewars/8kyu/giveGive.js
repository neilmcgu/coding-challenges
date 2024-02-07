function giveMeFive(obj) {
  //coding here
  let arr = [];
  console.log(obj);
  for (let keys in obj) {
    console.log(keys);
    if (keys.length === 5) arr.push(keys);
    if (obj[keys].length === 5) arr.push(obj[keys]);
  }
  return arr;
}
