function firstToLast(str, c) {
  //coding here..
  let firstIndex = str.indexOf(c);
  let lastIndex = str.lastIndexOf(c);

  if (firstIndex == -1) return -1;
  else return lastIndex - firstIndex;
}
