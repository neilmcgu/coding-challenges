// counting duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    //...
    let totalCount = 0 // number of distinct elements that repeat
    let countObj = {}
    let countArr = []
    text.split('').map(element => element.toLowerCase()).forEach( (element,index,arr) => {
      if(arr.indexOf(element) !== arr.lastIndexOf(element)){
        countObj[element] = true
      }
    })
    console.table(countArr)
    console.table(countObj)
    for(keys in countObj){
      totalCount++
    }
    return totalCount
  }

// refactored:
function duplicateCount(text){
    let totalCount = 0
    text.split('').map( el => el.toLowerCase()).forEach( (el,in,arr) => {
        if(arr.indexOf(el) !== arr.lastIndexOf(el)){
            totalCount++
        }
    })
    return totalCount
}