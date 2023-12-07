function getSize(width, height, depth) {
  let surfaceArea = [
    2 * (width * height + height * depth + width * depth),
    width * height * depth,
  ];
  return surfaceArea;
}
