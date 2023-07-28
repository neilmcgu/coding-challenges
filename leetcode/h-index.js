// prep
// parameters
// array of citations where citations[i] is the number of citations recieved for ith paper
// return the h-index
// the h index is the max value of h such that the given researcher has published at least h papers
// that have each been cited at least h times
// example
// citations = [1,3,1,2] => (2) because there are two papers with atleast two citations but not three papers with atleast three citations
// for each element in the array, check the number of elements that are equal or greater
// return the element which has the most of these matches

function hIndex(citations){
    let hIndex = 0

    let sortedArr = citations.sort( (a,b) => a-b)

    let maxValue = 0

    for(let i = 0; i<sortedArr.length; i++){
        if(sortedArr[i] <= sortedArr.length -  i){
            maxValue = sortedArr[i]
        }
    }

    return maxValue
}

let citations = [5,6,5,1,1,1,1]

console.log(hIndex(citations))