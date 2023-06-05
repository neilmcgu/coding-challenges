// exes and ohs

// given: a string of characters (upper case and lower case)
// return: true or false. if the number of x's is the same as the number of o's then return true else false
// ex: XO('string of chars') => false (1 o, 0 x's)
// ex: XO('xxOO') => true (2x's, 2o's)
// to do this we need to make sure all of the characters in the string are lower case
// then we can grab a count of the x's and compare that to the count of the os.
// return the result of them = each other

function XO(str) {
  let chars = str.split("")
  let exes = 0 // number of x's
  let ohs = 0 // number of ohs
  for (let i = 0; i < chars.length; i++) {
    if (chars[i].toLowerCase() === "x") {
      exes++
    } else if (chars[i].toLowerCase() === "o") {
      ohs++
    }
  }
  return exes === ohs
}
