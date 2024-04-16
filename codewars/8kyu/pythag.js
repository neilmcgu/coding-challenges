function isPythagoreanTriple(integers) {
  // Good luck friends!
  let aSq = Math.pow(integers[0], 2);
  let bSq = Math.pow(integers[1], 2);
  let cSq = Math.pow(integers[2], 2);

  if (aSq + bSq == cSq) return true;
  else if (bSq + cSq == aSq) return true;
  else if (cSq + aSq == bSq) return true;
  else return false;
}
