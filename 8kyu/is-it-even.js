// is it even?
// determine if the number is even or not
// given an integer
// expected true or false
// true if the number provided is even
// false otherwise
// ex: testEven(2) => true, testEven(-5) => false, testEven(6) => true
// we can use the modulus operator to test if there is a remainder after dividing by two. if there is a remainder then we return false

function testEven(n) {
    return n % 2 === 0
}