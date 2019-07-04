//Begin the Game
// Throws are when the player attempts to knock down pins, players get 2 throws per frame unless they throw a strike
// if a player throws a strike the score for the frame is 10 plus the total pins knocked down on the next two throws
//if a plaler throws a spare the score for the frame is 10 plus the number of pins knocked down on the next throw

var Game = function () {
    this.throw = [];
    
};

Game.prototype.throws = function (pins) {
    this.throw.push(pins)

};
//There are 10 Frames but players get 2 throws per frame
//Needs to work for Spares and Strikes
Game.prototype.playerScore = function () {
    var score = 0;
    var throwInFrame = 0;
    var game = this;
    for (var frame = 0; frame < 10; frame++) {


        if (spare()) {
            score += spareScore();
        }
        else {
            score += noBonusScore();
        }
      
        throwInFrame += 2;
    }
    return score;

    function spare() {
        return game.throw[throwInFrame] + game.throw[throwInFrame + 1] == 10;
    }

    function spareScore() {
        return game.throw[throwInFrame] + game.throw[throwInFrame + 1] + game.throw[throwInFrame + 2];
        
    }
    function noBonusScore() {
        return game.throw[throwInFrame] + game.throw[throwInFrame + 1];
    }
}
        
    
