function calculateTip(amount, rating) {
  console.log(amount, rating);
  if (amount === 0) return 0;
  const tip = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  };
  if (!tip[rating.toLowerCase()] && tip[rating.toLowerCase()] !== 0)
    return "Rating not recognised";
  let multiplier = tip[rating.toLowerCase()];
  return Math.ceil(amount * multiplier);
}
