// use array.reduce()
// count the number of people remaining on a bus after it reaches it's final stop
// assume you are given an array of arrays
// [[on,off],[on,off],...]

function peopleRemaining(stops) {
  let numPeople = 0;

  numPeople = stops.reduce((acc, [on, off]) => acc + on - off, 0);

  return numPeople;
}

let stops = [
  [1, 0],
  [1, 1],
  [3, 0],
  [0, 2],
];

console.log(peopleRemaining(stops));
