// given an array of numbers, find the number that is unique
// arr.length >= 3
// all numbers are the same except for the unique number

function findUniq(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return arr[i]
    }
}