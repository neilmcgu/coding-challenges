/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /*
    if arr is sorted
    duplicates will be one after another
    so if i = i+1 i+1 should be removed
    how?
    turn it to zero
    (can you slice/splice? )
    keep track of how many times you do it
    then when the deletion is done, resort the array and unshift
     */
     if(!nums || nums.length <= 0){
         return 0
     }else if(nums.length === 1){
         return 1
     }
     let counter = 0
    for(let i = 0; i<nums.length; i++){
        if(nums.indexOf(nums[i]) != nums.lastIndexOf(i)) nums.splice(i,1)
    }
    return counter
}

