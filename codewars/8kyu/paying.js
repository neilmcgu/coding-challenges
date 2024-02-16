function whoIsPaying(name) {
  //your code here
  let trunc = name.slice(0, 2);
  return name.length > 2 ? [name, trunc] : [name];
}
