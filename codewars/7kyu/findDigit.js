var findDigit = function (num, nth) {
  if (num < 0) num = num * -1;
  if (nth <= 0) return -1;
  let reverse = String(num).split("").reverse().join("");
  console.log("num", num);
  console.log("nth", nth);
  console.log("reverse", reverse);
  if (nth > reverse.length) return 0;
  return Number(reverse[nth - 1]);
};
