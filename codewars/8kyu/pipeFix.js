function pipeFix(numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let arr = [];
  for (let i = min; i <= max; i++) arr.push(i);
  return arr;
}
