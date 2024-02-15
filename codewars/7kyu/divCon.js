function divCon(x) {
  console.log(x);

  let strings = x
    .filter((e) => typeof e == "string")
    .reduce((acc, ce) => (acc += Number(ce)), 0);
  let ints = x
    .filter((e) => typeof e == "number")
    .map((e) => Number(e))
    .reduce((acc, ce) => (acc += ce), 0);

  console.log("strings", strings);
  console.log("ints", ints);

  return ints - strings;
}
