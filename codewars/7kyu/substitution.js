function solution(value) {
  //...
  let valArr = String(value).split("");
  valArr.reverse();
  let output = [];
  for (let i = 0; i < 5; i++) {
    output.push(valArr[i] || 0);
  }
  output.reverse();
  let strOut = output.join("");

  return `Value is ${strOut}`;
}
