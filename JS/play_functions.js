//Executed when user starts playing
function playGame(){
  if(Game.currentState.isGameOver === false){
    //1. Fetch the selected column
    let col = $(event.target).parent("td").index();
    //2. Get empty row for that column - so coloured circle can be stacked
    let emptyRowNumber= getEmptyRowForSelectedColumn(col);
    if(emptyRowNumber !== null){
      //3. Update colour in the selected row, col
      addColorToSelection(emptyRowNumber,col,Game.currentState.activeColor);
      //4. Verify if win / draw condition is met after the current move
      let result = checkAll();
      if (result === Game.result.win) {
          $("h3").text(Game.currentState.activeName+ ", "+Game.messages.winMsg);
          toggleGameStatus();
      } else if (result === Game.result.draw) {
          $("h3").text(Game.messages.drawMsg);
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
  Game.currentState.isGameOver = !(Game.currentState.isGameOver);
}


//Switch active player once circle selection is done
function togglePlayer(){
    if(Game.currentState.activePlayer === Game.config.player1.index){
      Game.currentState.activePlayer = Game.config.player2.index;
      Game.currentState.activeName  = Game.config.player2.name;
      Game.currentState.activeColor = Game.config.player2.color;
    } else {
      Game.currentState.activePlayer = Game.config.player1.index;
      Game.currentState.activeName  = Game.config.player1.name;
      Game.currentState.activeColor = Game.config.player1.color;
    }
    $("h3").text(Game.currentState.activeName+ ", "+Game.messages.playMsg);
}

//Return color of cell for given row and column
function getCellColor(rowIndex,colIndex){
    return (Game.boardConfig.board.find("tr").eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color"));
}

//Return empty row for selected column
function getEmptyRowForSelectedColumn(colIndex){
    let circleColor;
     for (let row = (Game.boardConfig.boardRows-1); row >= 0; row--) {
         circleColor = getCellColor(row,colIndex);
        if (circleColor === "rgb(255, 255, 255)") {
          return row;
        }
        
    }
  return null;
}

//Add color to the empty row for selected column by player
function addColorToSelection(rowIndex,colIndex,color){
    return (Game.boardConfig.board.find("tr").eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color",color));
}

//Reset board and messages and set default player
function resetGame(){
  Game.currentState.activePlayer = Game.config.player1.index;
  Game.currentState.activeName  = Game.config.player1.name;
  Game.currentState.activeColor = Game.config.player1.color;
  if (Game.currentState.isGameOver === true){
    //Update the Game status if - Win/Draw is achieved
    toggleGameStatus();
  }
  $("h3").text(Game.currentState.activeName+ ", "+Game.messages.playMsg);
  return Game.boardConfig.board
  .find("tr")
  .find("td")
  .find("button")
  .css("background-color", "rgb(255,255,255)");
}