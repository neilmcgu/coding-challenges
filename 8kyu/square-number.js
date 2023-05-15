// square number
function nearestSq(n) {
  let answer = n % n
  let sq = Math.sqrt(n)

  if (n % sq === 0) {
    // we have a perfect square
    answer = n
  }

  let number = Math.round(sq)
  answer = number * number

  return answer
}
