/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length
    let majority = n/2
    let elements = {}
    for(let i = 0; i<nums.length; i++){
        if(elements[nums[i]]){
            elements[nums[i]] += 1
        }else{
            elements[nums[i]] = 1
        }
    }
    console.log(elements)
    for(el in elements){
        if(elements[el] >= majority){
            return el
        }
    }
};