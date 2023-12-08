function all(arr, fun) {
  // ...
  /*
  PREP
  Parameters
    arr - an array
    fun - a function
  Return
    return true or false
      true if all elements in the array passed into fun return true
      otherwise false
  Example
    all((1,2,3,4,5), greater_than_9) -> false
  Psuedo code
    So we want to pass every element of the array into the function
    Then we monitor the results
    If there is a single false we can escape and return false
    If everything is true then return true
  */
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) return false;
  }
  return true;
}
