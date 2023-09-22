// find the smallest positive integer that does not appear in the array

function smallInt(arr) {
  arr.sort();
  arr.filter((e) => e >= 0);
  for (let i = 1; i <= Math.max(...arr) + 1; i++) {
    if (!arr.includes(i)) return i;
  }

  return 1;
}
