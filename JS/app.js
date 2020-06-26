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

//Actions when player selects column - check empty row for selected column, check winner
$(document).ready(function(){
  $("h3").text(activeName+ ", it is your turn");
  $(".board button").on("click",function(){
     let col = $(event.target).parent("td").index();
     
     let rowNumber= getEmptyRowForSelectedColumn(col);
     addColorToSelection(rowNumber,col,activeColor);
     //Add code to check result
     togglePlayer();
  });
});

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
}

//Add color to the empty row for selected column by player
function addColorToSelection(rowIndex,colIndex,color){
    return (board.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color",color));
}

