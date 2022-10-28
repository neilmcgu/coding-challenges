// create a function sortInDecreasingOrder(arr) that sorts the numbers in the array by greatest to least

function sortInDecreasingOrder(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i+1]){
            let j = arr[i]
            let k = arr[i+1]
            arr[i] = k
            arr[i+1] = j
            i = -1;
            console.log(arr)
        }
    }

    /* 
    arr.sort( (a,b) => b - a)
    */

}
