//Actions when player selects column - check empty row for selected column, check winner
$(document).ready(function(){
//Create dynamic row and col,then add click event on button
  appendRowCol(addClick);
  $("h3").text(Game.currentState.activeName+ ", "+Game.messages.playMsg);
});

//Add event on button
function addClick(){
 $(".board button").on("click", playGame);
}

//create dynamic row and col
function appendRowCol(callback){
  for (var i=0;i< Game.boardConfig.boardRows;i++) {
    var $row = $("table").append("<tr />").children("tr:eq("+i+")");
    for (var k=0;k< Game.boardConfig.boardCols;k++) {
          $row.append("<td><button type='button'></button></td>");
    }
  }
  if (typeof callback == "function") 
  callback();
}
