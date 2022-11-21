// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//my code

function countPositivesSumNegatives(input) {
    // your code here
    const arr = []
    let pos = 0
    let neg = 0
    if(input == [] || input == null){ return []}
    input.forEach( e => {
      e > 0 ? pos++ : neg += e
    })
    if( pos > 0 || neg < 0 ){
    arr[0] = pos
    arr[1] = neg 
      }
    return arr
  }

// other code
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}