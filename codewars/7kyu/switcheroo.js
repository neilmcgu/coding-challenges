function switcheroo(x) {
  return x
    .split("")
    .map((char) => {
      if (char === "a") return "b";
      else if (char === "b") return "a";
      else return char;
    })
    .join("");
}
