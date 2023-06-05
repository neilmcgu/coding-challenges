// mumbling

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// my solution

function accum(s) {
	// your code
  let str = ''
  s.split('').forEach( (letter,index) => {
    str += letter.toUpperCase()
    for(let i = 1; i<index+1; i++){
      str += letter.toLowerCase()
    }
    str += '-'
  })
  return str.slice(0,str.length-1)
}

// other solutions

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
