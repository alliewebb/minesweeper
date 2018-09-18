document.addEventListener('DOMContentLoaded', startGame)


var board = createBoard(5);

function createBoard(size) {
  var board = {
    cells: []
  };
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      board.cells.push({row:i, col:j, isMine:Math.random() < 0.3, isMarked:false, hidden:true})
    }
  }
  return board;
}



function startGame () {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  document.addEventListener("click", checkForWin);
  document.addEventListener("auxclick", checkForWin);
  lib.initBoard()
}


function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && !board.cells[i].isMarked) {
      return
    }
    if (!board.cells[i].isMine && board.cells[i].hidden) {
      return
    }
    }
    return lib.displayMessage('You win!')
  }
 
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++
    }
  }
  return count
}

