/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

    let sortedArr = citations.sort( (a,b) => b-a)

    let h = 0

    for(let i = 0; i<sortedArr.length; i++){
        if(sortedArr[i] > i){
            h++
        }
    }

    return h
};