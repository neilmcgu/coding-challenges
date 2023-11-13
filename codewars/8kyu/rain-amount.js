function rainAmount(mm) {
  let difference = 40 - mm;
  console.log(mm);
  console.log(mm < 40);
  if (mm < 40) {
    return "You need to give your plant " + difference + "mm of water";
  }

  return "Your plant has had more than enough water for today!";
}
