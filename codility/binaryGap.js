/*

binary gap
take a number (positive int)
turn it into binary
return the length of the longest binary gap (binary gap is the number of zeros between ones in a binary number. ex: 1001 => binary gap of two)

*/

function solution(n) {
  let bin = n.toString(2);
  console.log(bin);
}

solution(5);
