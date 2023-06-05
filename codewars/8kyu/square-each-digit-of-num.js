// given a number, square each digit individually and return the results concatenated together
// ex: 9119 -> 811181

function squareDigits(num){
  
    return Number(String(num).split('').map( num => num*num).join(''))
    
  }