<<<<<<< HEAD
=======
// remove duplicate numbers from sorted array in place
// in order to remove them in place we will have to replace them with another number, then sort the array again
// use a number that is out of bounds then when you sort it, you can just chop off the end
// if the array is sorted from lowest to highest, then you will want to replace the numbers with an exceptionally large number and vise versa

function removeDuplicateNums(sortedArr) {
  let duplicates = [];
  for (let i = 0; i < sortedArr.length; i++) {
    if (
      sortedArr.indexOf(sortedArr[i]) !== sortedArr.lastIndexOf(sortedArr[i])
    ) {
      // it's a duplicate
      duplicates.push(i);
    }
  }
  console.log(duplicates);
  duplicates.forEach((duplicate) => {
    sortedArr[duplicate] = 1000000;
  });
  return sortedArr;
}

let arr = [1, 2, 3, 3, 4, 5, 5, 6, 7];
console.log(removeDuplicateNums(arr));
console.log(arr);
>>>>>>> 40ddb6f (anki)
