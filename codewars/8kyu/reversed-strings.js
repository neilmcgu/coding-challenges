// Reversed Strings
// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//My solution
function reverse(str) {
    let newStr = ''
    for(let i = str.length - 1; i>=0; i--){
        newStr += str[i]
    }
    return newStr
}

//Other Solutions
function solution(str){
    return str.split('').reverse().join('');  
}
