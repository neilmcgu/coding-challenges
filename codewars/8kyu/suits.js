function defineSuit(card) {
  // good luck
  let suit = card.split("").pop();
  if (suit === "♣") return "clubs";
  else if (suit === "♦") return "diamonds";
  else if (suit === "♥") return "hearts";
  else if (suit === "♠") return "spades";
}
