var filterString = function (value) {
  //Complete this function :)
  let numbersAsStrings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let arr = value
    .split("")
    .filter((val) => numbersAsStrings.includes(val))
    .join("");
  return Number(arr);
};
