function minValue(values) {
  //your code here
  // we have a array of numbers
  // first we want to remove duplicates
  // then we want to sort them in ascending order
  // then we want to join them together to create a number
  // and return that number
  let noDupes = values
    .filter((val, index) => values.indexOf(val) === index)
    .sort((a, b) => a - b)
    .join("");
  return Number(noDupes);
}
