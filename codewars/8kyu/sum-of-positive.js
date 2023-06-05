// sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// my solution
function positiveSum(arr) {
    let sum = 0;
    arr.forEach( num => { num > 0 ? sum += num : sum += 0 })
    return sum
  }

  // refactored
  function positiveSum(arr) {
    return arr.reduce( (acc, num) => num > 0 ? acc+=num : acc += 0,0)
  }

  //other solutions
  // n/a - refactored solution already matches most effecient solution