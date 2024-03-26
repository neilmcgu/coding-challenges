function boredom(staff) {
  let sum = 0;
  for (let keys in staff) {
    if (staff[keys] == "accounts") {
      sum += 1;
    } else if (staff[keys] == "finance") {
      sum += 2;
    } else if (staff[keys] == "canteen") {
      sum += 10;
    } else if (staff[keys] == "regulation") {
      sum += 3;
    } else if (staff[keys] == "trading") {
      sum += 6;
    } else if (staff[keys] == "change") {
      sum += 6;
    } else if (staff[keys] == "IS") {
      sum += 8;
    } else if (staff[keys] == "retail") {
      sum += 5;
    } else if (staff[keys] == "cleaning") {
      sum += 4;
    } else if (staff[keys] == "pissing about") {
      sum += 25;
    }
  }
  console.log(sum);
  return sum <= 80
    ? "kill me now"
    : sum < 100 && sum > 80
    ? "i can handle this"
    : "party time!!";
}
