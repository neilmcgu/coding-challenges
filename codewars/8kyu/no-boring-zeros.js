// no boring zeros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  let str = String(n)
  let arr = str.split("")
  if (arr.length === 1) {
    if (arr[0] === 0) {
      return null
    } else {
      return n
    }
  }
  if (arr[arr.length - 1] === "0") {
    arr.splice(arr.length - 1)
    return noBoringZeros(Number(arr.join("")))
  }
  return n
}


// other solution
function noBoringZeros(n) {
  while (n % 10 == 0 && n != 0) {
    n /= 10
  }
  return n
}