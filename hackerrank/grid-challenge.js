function gridChallenge(grid) {
  // Write your code here
  // given a grid of rows and columns, alphabetize the rows and then check to see if the columns are also alphabetized.
  // if both rows and columns are in alphabetical order, return yes. otherwise return no.
  console.log(grid);

  let newGrid = grid.map((row) => row.split("").sort().join(""));
  let columns = [];
  for (let i = 0; i < newGrid[0].length; i++) {
    let col = "";
    newGrid.forEach((row) => {
      col += row[i];
    });
    columns.push(col);
  }

  let alphabetical = true;

  columns.forEach((col) => {
    if (col !== col.split("").sort().join("")) alphabetical = false;
  });

  console.log("newgrid", newGrid);
  console.log("columns", columns);

  return alphabetical ? "YES" : "NO";
}
