//Begin the Game
// Throws are when the player attempts to knock down pins, players get 2 throws per frame unless they throw a strike
// if a player throws a strike the score for the frame is 10 plus the total pins knocked down on the next two throws
//Empty Array for player throws to be stored in
var Game = function () {
    this.throw = [];
    
};

Game.prototype.throws = function (pins) {
    this.throw.push(pins)

};
//There are 10 Frames but players get 2 throws per frame
Game.prototype.playerScore = function () {
    var score = 0
    for (var i = 0; i < 20; i++){
        score += this.throw[i]
    }
    return score;
}
