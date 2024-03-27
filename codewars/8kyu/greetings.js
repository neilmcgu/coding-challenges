function validateHello(greetings) {
  greetings = greetings.toLowerCase();
  res =
    greetings.includes("hello") ||
    greetings.includes("ciao") ||
    greetings.includes("salut") ||
    greetings.includes("hallo") ||
    greetings.includes("hola") ||
    greetings.includes("ahoj") ||
    greetings.includes("czesc");

  return res;
}
