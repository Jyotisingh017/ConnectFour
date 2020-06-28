//Objects to store player properties
var player1 = {
    index: 1,
    name: "Player 1",
    color: "rgb(0,0,0)"
}

var player2 = {
    index: 2,
    name: "Player 2",
    color: "rgb(235,220,14)"
}

var board = $("table tr");

var activePlayer = player1.index;
var activeName  = player1.name;
var activeColor = player1.color;
var isGameOver = false;

