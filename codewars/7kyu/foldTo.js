function foldTo(distance) {
  if (distance < 0) {
    return null;
  }
  let folds = 0;
  let length = 0.0001;
  while (length < distance) {
    folds++;
    length *= 2;
  }
  return folds;
}
