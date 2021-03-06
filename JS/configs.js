//Objects to store Game config and state properties

var Game = {};

//player details
Game.config = {
    player1 :{
        index: 1,
        name: "Player 1",
        color: "rgb(0,0,0)"
    },
    player2 : {
        index: 2,
        name: "Player 2",
        color: "rgb(235,220,14)"
    },
    
};

//board rows and columns
Game.boardConfig = {
    board : $("table"),
    boardRows : 6,
    boardCols : 7
};

//current player details and game state
Game.currentState = {
    activePlayer : Game.config.player1.index,
    activeName  : Game.config.player1.name,
    activeColor : Game.config.player1.color,
    isGameOver : false
}

//User messages
Game.messages = {
    winMsg : "is Winner!! Reset game to start again.",
    drawMsg : "Game Over!!  Reset game to start again.",
    playMsg: "it is your turn"
}

//Output of validation checks
Game.result = { 
    win : "win",
    draw : "draw"
}

