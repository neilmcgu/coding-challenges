// reverse or rotate

function revrot(str, sz) {
  // your code
  // using the string str
  // create chunks of size sz
  // (ignore any remainders)
  // forEach Chunk
  //      if sum of the cubes of its digits is divisible by 2
  //      reverse the chunk
  //      else
  //      rotate it to the left by one position (12345=> 23451)
  // then
  // put the chunks back together and return the result as a string
  console.log(`str: ${str}, sz: ${sz}`);
  if (sz <= 0 || sz > str.length || !str) return "";
  let chunks = [];
  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz);
    if (chunk.length == sz) chunks.push(chunk);
  }
  console.log(`chunks: ${chunks}`);
  let arr = chunks.map((chunk) => {
    console.log(`chunk: ${chunk}`);
    let integer = chunk.split("").map((e) => Number(e));
    console.log(integer);
    let val = integer.reduce((acc, ce) => acc + Math.pow(ce, 3), 0);
    console.log(`val: ${val}`);
    if (val % 2 === 0) {
      console.log(`value is divisible by two. reversing.`);
      return chunk.split("").reverse().join("");
    } else {
      console.log(`rotating chunk ${chunk}`);
      let first = chunk.split("").shift();
      let temp = chunk.split("");
      temp.push(first);
      temp.shift();
      chunk = temp.join("");
      console.log(`chunk rotated: ${chunk}`);
      return chunk;
    }
  });

  console.log(arr);

  return arr.join("");
}
