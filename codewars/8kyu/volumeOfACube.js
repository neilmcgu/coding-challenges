var cubeChecker = function (volume, side) {
  if (volume <= 0 || side <= 0) return false;
  if (volume === Math.pow(side, 3)) return true;
  else return false;
};
