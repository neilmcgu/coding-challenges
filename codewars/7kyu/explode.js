function explode(s) {
  let arr = s.split("");
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    let ar = new Array(Number(arr[i])).fill(arr[i]);
    string += ar.join("");
  }
  return string;
}
