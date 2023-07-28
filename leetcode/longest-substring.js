/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;
  
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
  
    for (let i = 0; i < s.length; i++) {
  
        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
  }
  
  /**
   * my solution *
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
          }
      })
      return unique
  }