function outed(meet, boss) {
  let totHappiness = 0;
  let countKeys = 0;
  for (people in meet) {
    people == boss
      ? (totHappiness += meet[people] * 2)
      : (totHappiness += meet[people]);
    countKeys++;
  }
  let avg = totHappiness / countKeys;
  if (avg <= 5) return "Get Out Now!";
  else return "Nice Work Champ!";
}
