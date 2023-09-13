function sumTriangularNumbers(n) {
  if (n < 0) return 0;
  let sum = 0;
  let triangles = [];
  console.log(`n: ${n}`);
  for (let i = 0; i <= n; i++) {
    console.log(`sum: ${sum}, i: ${i}`);
    sum = sum + i;
    triangles.push(sum);
  }

  return triangles.reduce((acc, ce) => (acc += ce));
}
