function fizzBuzz(a, b, c) {
  for (let i = 0; i <= c; i++) {
    if (i % a == 0 && i % b == 0) console.log("fizzBuzz");
    else if (i % a == 0) console.log("fizz");
    else if (i % b == 0) console.log("buzz");
    else console.log(i);
  }
}
