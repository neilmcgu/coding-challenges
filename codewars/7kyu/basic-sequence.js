// The nth term is the sum of numbers from 0 to n, inclusive

// input: integer n
// output: list/array, length abs(n) + 1

// if n < 0 return the sequence with all numbers negative

function sumOfN(n) {
  let list = [];

  for (let i = 0; i <= Math.abs(n); i++) {
    let sum = 0;
    for (let j = 0; j <= i; j++) {
      sum += j;
    }
    n < 0 && sum !== 0 ? list.push(sum * -1) : list.push(sum);
  }

  return list;
}
