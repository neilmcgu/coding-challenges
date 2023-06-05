function dataReverse(data) {
  // need to split the data up into bytes (array)
  // reverse that array, join the bytes back together, and output the result

  // split the data by groups of 8 (byte size)
  let arrayOfBytes = []
  for (let i = 0; i < data.length; i += 8) {
    let copy = data.slice(i, i + 8)
    arrayOfBytes.push(copy)
  }
  arrayOfBytes = arrayOfBytes.reverse()
  console.log(`arrayOfBytes`, arrayOfBytes)
  let output = []
  arrayOfBytes.forEach((byte) => {
    for (let i = 0; i < byte.length; i++) {
      output.push(byte[i])
    }
  })
  console.log(`output`, output)
  return output
}
