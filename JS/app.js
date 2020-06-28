//Actions when player selects column - check empty row for selected column, check winner
$(document).ready(function(){
  $("h3").text(activeName+ ", it is your turn");
  //Start playing game
    $(".board button").on("click", playGame);
});
