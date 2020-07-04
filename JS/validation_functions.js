//Returns color of four consecutive cells is same or not
function validateColorMatch(firstCell, secondCell, thirdCell, fourCell) {
  return (
    firstCell !== undefined &&
    firstCell !== "rgb(255, 255, 255)" &&
    firstCell === secondCell &&
    firstCell === thirdCell &&
    firstCell === fourCell   
  );
}

//check four consecutive circles are of same color vertically
function checkVertical(){
  for (let col = 0; col < Game.boardConfig.boardCols; col++) {
    for (let row = 0; row < Game.boardConfig.validationRowColLimit.verticalCheckRowLimit; row++) {
      if (
        validateColorMatch(
          getCellColor(row, col),
          getCellColor(row + 1, col),
          getCellColor(row + 2, col),
          getCellColor(row + 3, col)
        )
      ) {
        return Game.currentState.activePlayer;
      } else {
        continue;
      }
    }
  }
}

//check four consecutive circles are of same color diagonally toward right
function checkDiagonalRight(){
  for (let row = 3; row < Game.boardConfig.boardRows; row++) {
    for (let col = 0; col < Game.boardConfig.validationRowColLimit.diagonalRightCheckColLimit; col++) {
      if (
        validateColorMatch(
          getCellColor(row, col),
          getCellColor(row - 1, col + 1),
          getCellColor(row - 2, col + 2),
          getCellColor(row - 3, col + 3)
        )
      ) {
        return Game.currentState.activePlayer;
      } else {
        continue;
      }
    }
  }
}

//check four consecutive circles are of same color diagonally toward left
function checkDiagonalLeft(){
  for (let row = 3; row < Game.boardConfig.boardRows; row++) {
    for (let col = 3; col < Game.boardConfig.boardCols; col++) {
      if (
        validateColorMatch(
          getCellColor(row, col),
          getCellColor(row - 1, col - 1),
          getCellColor(row - 2, col - 2),
          getCellColor(row - 3, col - 3)
        )
      ) {
        return Game.currentState.activePlayer;
      } else {
        continue;
      }
    }
  }
}

//check four consecutive circles are of same color horizontally
function checkHorizontal(){
  for (let row = 0; row < Game.boardConfig.boardRows; row++) {
    for (let col = 0; col < Game.boardConfig.validationRowColLimit.horizontalCheckColLimit; col++) {
      if (
        validateColorMatch(
          getCellColor(row, col),
          getCellColor(row, col + 1),
          getCellColor(row, col + 2),
          getCellColor(row, col + 3)
        )
      ) {
        return Game.currentState.activePlayer;
      } else {
        continue;
      }
    }
  }
}

//check whether its draw between players
function checkDraw(){
  let cellColor;
  for (let col = 0; col < Game.boardConfig.boardCols; col++) {
    cellColor = getCellColor(0, col);
    
    if (cellColor === "rgb(255, 255, 255)") {
      return null;
    }
  } 
  return "draw";
}

//Return whether four consecutive circles are of same color vertically,horizontally,diagonally or it's a draw.
function checkAll() {
   return checkVertical() || checkDiagonalRight() || checkDiagonalLeft() || checkHorizontal() || checkDraw();
}
