function meeting(s) {
  // your code
  let names = s.split(";");
  names = names.map((name) =>
    name
      .split(":")
      .reverse()
      .map((char) => char.toUpperCase())
  );
  console.log(names);
  names.sort();
  console.log(names);
  names = names.map((name) => name.join(", "));
  let str = names.join(")(");
  return `(${str})`;
}
