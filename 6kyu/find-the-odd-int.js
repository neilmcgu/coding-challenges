//find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    //happy coding!
    let num = 0
    A.forEach( (int,index,arr) => { 
      console.log('testing '+int)
      let count = 0
      for(let i = 0; i<arr.length; i++){
        if(arr[i] === int){
          count ++
        }
      }
      console.log('count '+count)
      console.log('int '+int)
      if(count %2 !== 0  ){
        console.log(`fount int ${int} to have a count of ${count}`)
        num = int
      }
    })
    return num;
  }

//   other solutions
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);