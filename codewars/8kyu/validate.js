function validateCode(code) {
  //your code here
  String(code)[0];
  if (
    String(code)[0] == "1" ||
    String(code)[0] == "2" ||
    String(code)[0] == "3"
  ) {
    return true;
  } else {
    return false;
  }
}
