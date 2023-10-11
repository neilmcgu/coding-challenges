function howManydays(month) {
  let days;
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;
    default:
      return 31;
      break;
  }
  return days;
}
