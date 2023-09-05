// alex got a new hoop
// write a program where Alex can input n times the hoop goes round and return a message
// if alex gets 10 or more hoops return "great, move on"
// else "keep at it"

function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}
