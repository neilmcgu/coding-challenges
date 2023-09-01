function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  if (
    s.includes("tree fiddy") ||
    s.includes("3.50") ||
    s.includes("three fifty")
  ) {
    return true;
  } else {
    return false;
  }
}
