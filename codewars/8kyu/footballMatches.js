function uefaEuro2016(teams, scores) {
  let winner = 0;
  if (scores[0] > scores[1]) {
    winner = `${teams[0]} won!`;
  } else if (scores[1] > scores[0]) {
    winner = `${teams[1]} won!`;
  } else if (scores[0] === scores[1]) {
    winner = "teams played draw.";
  }
  return `At match ${teams[0]} - ${teams[1]}, ${winner}`;
}
