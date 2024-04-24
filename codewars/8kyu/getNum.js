function getNumberFromString(s) {
  return Number(
    s
      .split("")
      .filter((a) => a <= "9" && a >= "0")
      .join("")
  );
}
