import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

const winner = document.createElement("div")
winner.innerText = "YOU WIN!"
winner.style.opacity = "0"
document.body.appendChild(winner);

const gridContainer = document.createElement("div");
gridContainer.className = "grid";
document.body.appendChild(gridContainer);

for (let i = 0; i < board.numRows; i++) {
  // first loop will give us the rows, so create a variable called "rowEl" that willl be a container div element that will later host the cells.
  // --------your code-------
  const rowEl = document.createElement("div")

  //set the class attribute of the element we just created (rowEl) to have a class of "row"
  // --------your code-------
  rowEl.classList.add("row")

  // add the row element to the end of the "gridContainer"
  // --------your code-------
  gridContainer.appendChild(rowEl)

  // now work on the inner loop that will loop through "colNum"
  for (let j = 0; j < board.numCols; j++) {
    // create a div element for the cell , store it in a variable called "cell"
    // --------your code-------
    const cell = document.createElement("div")

    // set the "cell" class attribute to have the value of "col"
    // --------your code-------
    cell.classList.add("cell")

    // now add the cell we created to the end of the "rowEl" as a child
    // --------your code-------
    rowEl.appendChild(cell)

    //add to the cell the coordinates of its `row - i` and `column - j` by using data- (hint, use setAttribute or dataset)
    // --------your code-------
    cell.dataset.row = i
    cell.dataset.column = j

    // then add an "event listener" to the cell, so that when it is clicked, we can add some logic to it, like logging out the row number and col number of the cell.
    // log the cell's row and cell's col (hint use cell.dataset from data-)
    // change the inner text of the cell to display the col and row
    // --------your code-------
    // cell.addEventListener("click", event => {
    //   console.log(event.target.dataset)
    //   cell.innerText = `${event.target.dataset.row}:${event.target.dataset.column}`
    // })
  }

}

gridContainer.addEventListener("click", function handler (event) {
  if (board.isGameOver()) {
    console.log("poop")
    return
  }

  const { target } = event

  if (target.classList.contains("cell")) {
    // target.innerText = `${target.dataset.row}:${target.dataset.column}`
    const { row, column } = target.dataset;

    const attempt = board.makeHit(row, column)

    if (attempt) {
      target.classList.add("hit")
      target.innerText = attempt;

      if (board.isGameOver()) {
        winner.style.opacity = "";
        // gridContainer.removeEventListener("click", handler)
      }
    }
    else {
      target.classList.add("miss")
    }
  }
})
