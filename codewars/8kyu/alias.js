function aliasGen(first, last) {
  let auxFirst = first[0].toUpperCase();
  let auxLast = last[0].toUpperCase();

  if (firstName[auxFirst] && surname[auxLast]) {
    return firstName[auxFirst] + " " + surname[auxLast];
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}
