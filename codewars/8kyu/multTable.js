function multiTable(number) {
  // good luck
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `${i} * ${number} = ${i * number}`;
    if (i < 10) output += `\n`;
  }
  return output;
}
