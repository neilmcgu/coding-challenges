function cookie(x) {
  // ...
  console.log(typeof x);
  let eat = "";
  if (typeof x == "string") eat = "Zach";
  else if (typeof x == "number") eat = "Monica";
  else eat = "the dog";

  return `Who ate the last cookie? It was ${eat}!`;
}
