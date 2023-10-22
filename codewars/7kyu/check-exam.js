function checkExam(array1, array2) {
  // good luck
  let score = 0;
  console.log(array1, array2);
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i], array2[i]);
    if (array2[i] === "") {
      score += 0;
      console.log("+ 0", score);
    } else if (array1[i] === array2[i]) {
      score += 4;
      console.log("+4", score);
    } else {
      score -= 1;
      console.log("-1", score);
    }
  }
  return score < 0 ? 0 : score;
}
