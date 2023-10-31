function stairsIn20(s) {
  //your code here
  let oneYear = s
    .map((ar) => ar.reduce((acc, ce) => acc + ce, 0))
    .reduce((acc, ce) => acc + ce, 0);
  return oneYear * 20;
}
