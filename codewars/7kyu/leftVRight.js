function alphabetWar(fight) {
  let left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };
  let right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < fight.length; i++) {
    if (left[fight[i]]) {
      leftSum += left[fight[i]];
    } else if (right[fight[i]]) {
      rightSum += right[fight[i]];
    }
  }

  console.log(fight);
  console.log(leftSum);
  console.log(rightSum);

  if (leftSum > rightSum) return "Left side wins!";
  else if (rightSum > leftSum) return "Right side wins!";
  else return `Let's fight again!`;
}
