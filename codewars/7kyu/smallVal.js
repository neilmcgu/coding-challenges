function min(arr, toReturn) {
  // TODO
  return toReturn === "value"
    ? Math.min(...arr)
    : toReturn === "index"
    ? arr.indexOf(Math.min(...arr))
    : "?";
}
