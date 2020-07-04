//Objects to store Game config and state properties

var Game = {};

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

Game.boardConfig = {
    board : $("table"),
    boardRows : 7,
    boardCols : 8,
    validationRowColLimit:{
        verticalCheckRowLimit: 4,
        diagonalRightCheckColLimit: 5,
        horizontalCheckColLimit: 5
    }
};

Game.currentState = {
    activePlayer : Game.config.player1.index,
    activeName  : Game.config.player1.name,
    activeColor : Game.config.player1.color,
    isGameOver : false
}

Game.messages = {
    winMsg : "is Winner!! Reset game to start again.",
    drawMsg : "Game Over!!  Reset game to start again.",
    playMsg: "it is your turn"
}

