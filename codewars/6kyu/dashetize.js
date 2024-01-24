// add dashes to strings
// given an integer
// go through each digit and decide if it is even or odd
// if it is even, leave it a lone.
// if it is odd, add a dash before and after it before returning it to the final output
// * make sure that there are only ever 1 "-" in a row
// * make sure the output doesn't start or end with a "-"

function dashatize(num) {
  let output = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) output.push[`-${num[i]}-`];
    else output.push(num[i]);
  }

  return output;
}
