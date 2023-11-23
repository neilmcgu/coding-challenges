function maxDiff(list) {
  if (list.length <= 1) return 0;
  let max = Math.max(...list);
  let min = Math.min(...list);

  return max - min;
}
