function tidyNumber(n) {
  //your code here
  if (
    String(n)
      .split("")
      .sort((a, b) => Number(a) - Number(b))
      .join("") == n
  )
    return true;
  else return false;
}
