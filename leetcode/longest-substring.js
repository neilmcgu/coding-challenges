/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let lengthOfLongestSubstring = 0
    let left = 0
    let right = 1
    while(right <= s.length){
        let substr = s.substring(left,right)
        if(substr.length > lengthOfLongestSubstring){
            lengthOfLongestSubstring = substr.length
        }
        if(s[left] === s[right]){
            left = right
        }
        right ++
    }
    return lengthOfLongestSubstring
}

let s = 'aabcdeabcdefabaa'
console.log(findLongestSubstringWithoutRepeatingChars(s))