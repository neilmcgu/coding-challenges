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

// Objectified
// grid challenge
// given an array of strings such that a grid is made
// alphebetize the rows of the grid, then check if the columns are also alphabetized
// if they are, return "YES", otherwise return "NO"

const grid = {
  input: [],
  alphabetizeRows() {
    this.input = this.input.map((row) => {
      return row.split("").sort().join("");
    });
  },
  getCols() {
    let cols = [];
    for (let i = 0; i < this.input.length; i++) {
      let col = [];
      for (let j = 0; j < this.input.length; j++) {
        col.push(this.input[j][i]);
      }
      cols.push(col.join(""));
    }
    this.cols = cols;
  },
  checkCols() {
    let alphabetical = "YES";
    this.cols.forEach((col) => {
      if (col !== col.split("").sort().join("")) alphabetical = "NO";
    });
    return alphabetical;
  },
};

grid.input = ["dfe", "abc", "hji"];
grid.alphabetizeRows();
grid.getCols();
console.log(grid.checkCols());
