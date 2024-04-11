function padIt(str, n) {
  //coding here
  let i = 0;
  while (i < n) {
    let arr = str.split("");
    if (i % 2 == 0) {
      arr.unshift("*");
    } else {
      arr.push("*");
    }
    str = arr.join("");
    i++;
  }
  return str;
}
