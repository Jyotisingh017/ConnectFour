//Executed when user starts playing
function playGame(){
  if(isGameOver === false){
    //1. Fetch the selected column
    let col = $(event.target).parent("td").index();
    //2. Get empty row for that column - so coloured circle can be stacked
    let emptyRowNumber= getEmptyRowForSelectedColumn(col);
    if(emptyRowNumber !== null){
      //3. Update colour in the selected row, col
      addColorToSelection(emptyRowNumber,col,activeColor);
      //4. Verify if win / draw condition is met after the current move
      let result = checkAll();
      if (result === player1.index) {
          $("h3").text(player1.name+ ", is Winner!! Reset game to start again.");
          toggleGameStatus();
      } else if (result === player2.index) {
          $("h3").text(player2.name+ ", is Winner!! Reset game to start again.");
          toggleGameStatus();
      } else if (result === 'draw') {
          $("h3").text("Game Over!!  Reset game to start again");
          toggleGameStatus();

      } else{
        //5. If no Win/Draw condition is met then toggle the player so other player can resume playing
        togglePlayer();
      }
    }
  }
}

//Change status of Game if win/draw
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
function getCellColor(rowIndex,colIndex){
    return (board.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color"));
}

//Return empty row for selected column
function getEmptyRowForSelectedColumn(colIndex){
    let circleColor;
     for (let row = 5; row >= 0; row--) {
         circleColor = getCellColor(row,colIndex);
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