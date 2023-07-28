// given a string s
// find the length of the longest substring without repeating characters
// return the length of that substring
// ex: s = "abcdefabcdaaccd" => abcdef => 6
// make two pointers, one at the start and one at start + 1
// them move the one on the right forward until it equals the value in start
// record the length of that substring and then move the left to that spot
function findLongestSubstringWithoutRepeatingChars(s){

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