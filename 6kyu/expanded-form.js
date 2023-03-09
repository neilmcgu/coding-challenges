//number in expanded form

// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
  return String(num)
    .split("")
    .map((number, index, arr) => number + "0".repeat(arr.length - 1 - index))
    .filter((numbers) => Number(numbers) != 0)
    .join(" + ")
}
