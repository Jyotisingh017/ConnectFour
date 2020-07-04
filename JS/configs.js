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
    boardRows : 6,
    boardCols : 7,
    validationRowColLimit:{ //Update these when board row and col are changed. eg: if Row is increased by 1, then increase verticalCheckRowLimit also by one and same applies for col checks also.
        verticalCheckRowLimit: 3,
        diagonalRightCheckColLimit: 4,
        horizontalCheckColLimit: 4
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

