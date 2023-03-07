//sum of pairs
function sumPairs(ints, s) {
  if (ints.length < 2) {
    return undefined
  }

  let solutions = []
  console.log(`Testing`)
  console.log(ints, s)

  for (let i = 0; i < ints.length - 1; i++) {
    for (let j = 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        //found a pair
        if (i != j && j > i) {
          console.log(`found a pair for s=${s}: i:${ints[i]} j:${ints[j]}`)
          solutions.push([ints[i], ints[j], j])
        }
      }
    }
  }
  //find the smallest j in solutions
  //solutions = [ [i,j], [i,j], [i,j] ]
  if (solutions === [] || solutions[0] === undefined) {
    return undefined
  }
  console.log(solutions)
  solutions.sort(([i, j, k], [a, b, c]) => k - c)
  console.log(solutions[0].slice(0, 2))

  const final = solutions[0].slice(0, 2)
  return final || undefined
}

// other solutions
function sumPairs() {
  let seen = {}
  for (let i = 0; i < ints.length; i++) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]]
    seen[ints[i]] = true
  }
}
