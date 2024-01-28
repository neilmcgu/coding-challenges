// build tower
// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function buildTower(numFloors) {
  if (numFloors < 1) return `invalid input`;
  let output = [];
  for (let i = 0; i < numFloors; i++) {
    let star = "*";
    let space = " ";

    let numStars = 2 * i + 1;
    let numSpaces = numFloors * 2 - 1 - numStars;

    let string =
      space.repeat(numSpaces / 2) +
      star.repeat(numStars) +
      space.repeat(numSpaces / 2);
    output.push(string);
  }
  return output;
}

console.log(buildTower(5));
