// tortoise racing
// given two speeds v1, and v2, how long will it take b to catch a if a has a g headstart? (v1 = speed of A, v2 = speed of b)
// v1 and v1 are integers greater than zero
// g is a positive integer
// expected an array [hour,min,sec] which is the time needed in hours minutes and seconds (rounded down to the nearest second) for b to catch a
// if v1 is greater than v2, b will never catch a, therefore you should return null
// ex: race(720,850,70) => [0,32,18]
//     race(80,91,37) => [3,21,49]
//     race(70,50,20) => null
// we need to get the difference in speed of the two, then use that to determine how long it will take to reach g
// let diff = v2 - v1 (could use absolute value but we dont need to sice we account for v2 being slower already)
// diff = 130 (the units are feet per hour and g is in feet)
// timeToOvertake = g/diff (70feet/130feet/hour) => hours to overtake
// once we get this time we can conver to hours, minutes, and seconds
// to convert a number of hours to hours minutes and seconds
// we can round down to get the hours, subtract that to get the remainder
// multiply the remainder by 60 to get minutes
// then do the same to get seconds

function race(v1, v2, g) {
  if (v1 >= v2) {
    return null
  }

  let speedDifference = v2 - v1
  let timeToOvertake = g / speedDifference

  let timeArray = [0, 0, 0]
  let hours = Math.floor(timeToOvertake)
  let remainder = timeToOvertake - hours
  timeToOvertake = 60 * remainder
  let minutes = Math.floor(timeToOvertake)
  remainder = timeToOvertake - minutes
  let seconds = remainder * 60
  seconds = Math.floor(seconds)

  timeArray[0] = hours
  timeArray[1] = minutes
  timeArray[2] = seconds

  console.log(`v1: ${v1} v2: ${v2} g: ${g}`)

  return timeArray
}

console.log(race(80, 91, 37))
