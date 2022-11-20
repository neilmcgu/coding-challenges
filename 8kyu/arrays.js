// find multiples of a number

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.


// my solution:
function findMultiples(integer, limit) {
    //your code here
    let arr = []
    for(let i = integer; i<=limit; i++){
      if(i % integer == 0){
        arr.push(i)
      }
    }
    return arr
  }
//refactored
function findMultiples(integer, limi){

}  

// other solutions:
function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
}

// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let count = 0
    arrayOfSheep.forEach( e => {
      if(e == true){
        count++
      }
    })
    return count
  }

//   other solutions:

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  
    let count = 0
    for(let i = 0; i < str.length; i++){
      if( (str[i] == 'a') || (str[i] == 'e') || (str[i] == 'i') || (str[i] == 'o') || (str[i] == 'u') ){
         count++
         }
    }
    
    return count
    
  }

  // other solutions:
  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }