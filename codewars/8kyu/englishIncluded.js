function spEng(sentence) {
  //write your code here
  let arr = sentence.toLowerCase().split("english");
  if (arr.length > 1) {
    return true;
  } else {
    return false;
  }
}
