function vowelIndices(word) {
  //your code here
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let indices = [];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) indices.push(i + 1);
  }
  console.log(indices);
  return indices;
}
