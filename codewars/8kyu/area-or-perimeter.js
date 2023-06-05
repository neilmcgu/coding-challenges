// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// we are given two measurements (length, width) that are both positive integers
// if the measurements are equal => return the product of the two measurements
// if the mesurements are not equal => return the addition of (length*2) + (width*2)
// ex: 6,10 -> 32, 3,3 -> 9

const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w
  } else {
    return 2 * l + 2 * w
  }
}
