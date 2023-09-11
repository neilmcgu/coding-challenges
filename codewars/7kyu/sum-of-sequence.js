// sum of a sequence
// starting at beginning, and incrementing by step until you reach or pass end
// add all the numbers together along the way and return that value

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  if (begin > end) {
    return 0;
  }
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    if (i > end) {
      break;
    }
    sum += i;
  }
  return sum;
};
