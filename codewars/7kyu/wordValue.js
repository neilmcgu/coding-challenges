function wordValue(a) {
  return a.map(
    (s, i) => (i + 1) * [...s].reduce((a, c) => a + (c.charCodeAt(0) % 32), 0)
  );
}
