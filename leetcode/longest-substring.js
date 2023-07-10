/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // given a string s
    // find the longest substring without repeating characters
    // return that substring
    let longest = ''

    // if all characters are unique, return the original string
    let unique = true
    s.split('').forEach(char => {
        if(s.split('').indexOf(char) !== s.split('').lastIndexOf(char)){
            unique = false
        }
    })

    if(unique) return s
    
    for(let i = 0; i<s.length; i++){
        for(let j = 0;j<s.length;j++){
            let substring = s.substring(i,j)
            if(substring.length > longest.length && charsAreUnique(substring)){
                console.log('longest',longest)
                console.log('substring',substring)
                longest = substring
            }
        }
    }

    return longest.length
};

function charsAreUnique(s){
    let unique = true
    s.split('').forEach(char => {
        if(s.split('').indexOf(char) !== s.split('').lastIndexOf(char)){
            unique = false
            
    })
    return unique
}

let str = '   '
str = str.substring(0,4)
console.log(str.length)