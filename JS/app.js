//Objects to store player properties
let player1 = {
    index: 1,
    name: "Player 1",
    color: "rgb(0,0,0)"
}

let player2 = {
    index: 2,
    name: "Player 2",
    color: "rgb(235,220,14)"
}

let board = $("table tr");

let activePlayer = player1.index;
let activeName  = player1.name;
let activeColor = player1.color;
let isGameOver = false;

//Actions when player selects column - check empty row for selected column, check winner
$(document).ready(function(){
  $("h3").text(activeName+ ", it is your turn");
  //Start playing game
    $(".board button").on("click", playGame);
});

function playGame(){
  if(isGameOver == false){
    //1. Fetch the selected column
    let col = $(event.target).parent("td").index();
    //2. Get empty row for that column - so coloured circle can be stacked
    let rowNumber= getEmptyRowForSelectedColumn(col);
    if(rowNumber !== null){
      //3. Update colour in the selected row, col
      addColorToSelection(rowNumber,col,activeColor);
      //4. Verify if win / draw condition is met after the current move
      let result = checkAll();
      if (result === player1.index) {
          $("h3").text(player1.name+ ", is Winner!! Reset game to start again.");
          toggleGameStatus()
      } else if (result === player2.index) {
          $("h3").text(player2.name+ ", is Winner!! Reset game to start again.");
          toggleGameStatus()
      } else if (result === 'draw') {
          $("h3").text("Game Over!!  Reset game to start again");
          toggleGameStatus()

      } else{
        //5. If no Win/Draw condition is met then toggle the player so other player can resume playing
        togglePlayer();
      }
    }
  }
}

function toggleGameStatus(){
  isGameOver = !isGameOver;
}


//Switch active player once circle selection is done
function togglePlayer(){
    if(activePlayer === player1.index){
        activePlayer = player2.index;
        activeName  = player2.name;
        activeColor = player2.color;
    } else {
        activePlayer = player1.index;
        activeName  = player1.name;
        activeColor = player1.color;
    }
    $("h3").text(activeName+ ", it is your turn");
}

//Return color of cell for given row and column
function getColorOfCell(rowIndex,colIndex){
    return (board.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color"));
}

//Return empty row for selected column
function getEmptyRowForSelectedColumn(colIndex){
    let circleColor;
     for (let row = 5; row >= 0; row--) {
         circleColor = getColorOfCell(row,colIndex);
        if (circleColor === "rgb(255, 255, 255)") {
          return row;
        }
        
    }
  return null;
}

//Add color to the empty row for selected column by player
function addColorToSelection(rowIndex,colIndex,color){
    return (board.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color",color));
}

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
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        validateColorMatch(
          getColorOfCell(row, col),
          getColorOfCell(row + 1, col),
          getColorOfCell(row + 2, col),
          getColorOfCell(row + 3, col)
        )
      ) {
        console.log("activePlayer vertical:"+activePlayer);
        return activePlayer;
      } else {
        continue;
      }
    }
  }
}

//check four consecutive circles are of same color diagonally toward right
function checkDiagonalRight(){
  for (let row = 3; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        validateColorMatch(
          getColorOfCell(row, col),
          getColorOfCell(row - 1, col + 1),
          getColorOfCell(row - 2, col + 2),
          getColorOfCell(row - 3, col + 3)
        )
      ) {
        return activePlayer;
      } else {
        continue;
      }
    }
  }
}

//check four consecutive circles are of same color diagonally toward left
function checkDiagonalLeft(){
  for (let row = 3; row < 6; row++) {
    for (let col = 3; col < 7; col++) {
      if (
        validateColorMatch(
          getColorOfCell(row, col),
          getColorOfCell(row - 1, col - 1),
          getColorOfCell(row - 2, col - 2),
          getColorOfCell(row - 3, col - 3)
        )
      ) {
        return activePlayer;
      } else {
        continue;
      }
    }
  }
}

//check four consecutive circles are of same color horizontally
function checkHorizontal(){
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        validateColorMatch(
          getColorOfCell(row, col),
          getColorOfCell(row, col + 1),
          getColorOfCell(row, col + 2),
          getColorOfCell(row, col + 3)
        )
      ) {
        return activePlayer;
      } else {
        continue;
      }
    }
  }
}

//check whether its draw between players
function checkDraw(){
  let cellColor;
  for (let col = 0; col < 7; col++) {
    cellColor = getColorOfCell(0, col);
    
    if (cellColor === "rgb(255, 255, 255)") {
      console.log("Game draw");
      return null;
    }
  } 
  return "draw";
}

//Return whether four consecutive circles are of same color vertically,horizontally,diagonally or it's a draw.
function checkAll(board) {
   return checkVertical() || checkDiagonalRight() || checkDiagonalLeft() || checkHorizontal() || checkDraw();
}

//Reset board and messages and set default player
function resetGame(){
  activePlayer = player1.index;
  activeName  = player1.name;
  activeColor = player1.color;
  if (isGameOver === true){
    //Update the Game status if - Win/Draw is achieved
    toggleGameStatus();
  }
  $("h3").text(activeName+ ", it is your turn");
  return board
  .find("td")
  .find("button")
  .css("background-color", "rgb(255,255,255)");
}