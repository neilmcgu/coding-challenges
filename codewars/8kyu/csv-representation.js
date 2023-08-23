// csv representation of an array
// take an array as input
// return output as CSV

function toCsvText(array) {
  let output = "";
  array.forEach((element, index, arr) => {
    let line = element.join(",").split(" ").join("");
    if (index < arr.length - 1) {
      output += `${line}\n`;
    } else {
      output += line;
    }
  });
  return output;
}
