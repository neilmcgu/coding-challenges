function remove(string) {
  //coding and coding....
  let noEx = string
    .split("")
    .filter((char) => char !== "!")
    .join("");
  noEx += "!";
  return noEx;
}
