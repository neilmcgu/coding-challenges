function rowWeights(array) {
  //your code here
  let team1 = array.filter((e, i) => i % 2 != 0);
  let team2 = array.filter((e, i) => i % 2 == 0);
  let weight2 = team1.reduce((acc, ce) => (acc += ce), 0);
  let weight1 = team2.reduce((acc, ce) => (acc += ce), 0);
  return [weight1, weight2];
}
