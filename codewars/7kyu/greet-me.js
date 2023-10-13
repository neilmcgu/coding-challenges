var greet = function (name) {
  let formattedName = name
    .split("")
    .map((e, i) => (i === 0 ? e.toUpperCase() : e.toLowerCase()))
    .join("");
  return `Hello ${formattedName}!`;
};
