
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

//     Find the unique number (this kata)
//     Find the unique string
//     Find The Unique

// given an array of numbers, find the number that is unique
// arr.length >= 3
// all numbers are the same except for the unique number

function findUniq(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return arr[i]
    }
}