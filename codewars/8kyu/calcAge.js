function calculateAge(birth, count) {
  // enter your code here.
  let age = count - birth;
  return age > 1
    ? `You are ${age} years old.`
    : age == 1
    ? `You are ${age} year old.`
    : age == 0
    ? "You were born this very year!"
    : age == -1
    ? `You will be born in 1 year.`
    : `You will be born in ${-age} years.`;
}
