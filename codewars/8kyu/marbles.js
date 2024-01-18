function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Your code here.
  return (
    (blueStart - bluePulled) / (blueStart - bluePulled + (redStart - redPulled))
  );
}
