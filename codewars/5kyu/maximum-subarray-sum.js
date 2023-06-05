// maximum subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// my solution

var maxSequence = function(arr){
    // ...
    let sum = arr.reduce( (acc,e) => acc+e, 0)
    
    for(let i = 1; i<=arr.length; i++){
      let newSum = 0
      for(let k = 0; k<i; k++){
        newSum += arr[k]
      }
      if(newSum > sum){
        sum = newSum
      }
      
      for(let j = 0; j<=arr.length - i; j++){
        //sum of j - j+i
        let otherSum = arr.slice(j,j+i).reduce( (acc,e) => acc+e,0)
        if(otherSum > sum){
          sum = otherSum
        }
      }
      
    }
    
    
    
    return sum > 0 ? sum : 0
  }

  // other solutions
  var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }