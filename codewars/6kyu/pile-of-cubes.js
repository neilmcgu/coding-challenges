// given m = n^3 + (n-1)^3 + ... + 1^3
// and m is known
// find n

function findNb(m){

    let counter = 1
    while(m > 0){
        let cube = Math.pow(counter,3)
        m -= cube
        counter++
    }

    if(m === 0){
        return counter -1
    }else{
        return -1
    }
}

console.log(findNb(1071225))
console.log(findNb(91716553919377))