function sortMyString(S) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < S.length; i++) {
    if (i % 2 == 0) {
      arr1.push(S[i]);
    } else {
      arr2.push(S[i]);
    }
  }
  // your code here
  return `${arr1.join("")} ${arr2.join("")}`;
}
