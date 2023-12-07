function uniTotal(string) {
  // total up dem unicodes!
  let sum = string.split("").reduce((acc, e) => (acc += e.charCodeAt()), 0);
  return sum;
}
