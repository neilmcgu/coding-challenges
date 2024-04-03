function arrayLeaders(numbers) {
  let leaders = [];
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let trailing = numbers.slice(i + 1);
    let trailingSum = trailing.reduce((acc, ce) => (acc += ce), 0);
    if (num > trailingSum) {
      leaders.push(numbers[i]);
    }
  }
  return leaders;
}
