// given an array of integers
// start at index 0
// given the number provided at that index, make a jump forward in the array of length number or less
// ex: at index 0 there is a number 2. That means you can jump forward either one or two spaces

// Find the least number of jumps you would have to make in order to reach the end of the array (land on the last index)
// ex: arr = [1,2,3,4] => starting on index 0 you can jump forward 1 spot. Then on index 1 you can jump forward two spots. Now you are at the end (index 3). The least amount of jumps you could make was 2
// ex: arr = [2,1,2,1,2] => two jumps min (0->2, 2->4)
// ex: arr = = [5,1,3] => one jump (5 > 2)

// try all jumps forward, see how close you can get
// the other thing is that if you look at it from reverse, you should be able to see the last possible jump you can make. then it's just a matter of making it to that jump.

// try to find the last possible jump
// once we find last jump, we just need to figure out how to get there, which can use the same formula.

function findLastJump(array, numJumps = 0){
    console.log(array,numJumps)

    if(array.length <= 1){
        return numJumps
    }

    let lastJump = array.length - 1 // index of the last jump to make
    
    for(let i = 0; i<=array.length; i++){
        if(array[i] >= array.length - 1 - i){
            // we can reach the end of the array
            lastJump = i
            console.log(`index of lastJump: `,lastJump)
            //cut off the end of the array ( index > i)
            let newArr = array.slice(0,lastJump+1)
            console.log('newArr', newArr)
            // increment numJumps
            numJumps ++
            console.log(`num jumps so far`, numJumps)
            // run it again
            console.log(`calling find jump`)
            return findLastJump(newArr,numJumps)
        }
    }

    return numJumps
    
}

let arr = [1,1,3,2,1] // expected jumps = 4
console.log(findLastJump(arr))
