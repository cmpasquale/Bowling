

describe("Game", function () {

    // refactor to add function the begin new game before functions

    var game;
    beforeEach(function(){
        game = new Game();
    })

    it("can roll a gutter game", function (){
    
        for (var i = 0; i < 20; i++){
            game.throws(0)
        }
        expect(game.playerScore()).equal(0);
    }
);
    it("can roll a game of twos", function () {

        for (var i = 0; i < 20; i++) {
            game.throws(2)
        }
        expect(game.playerScore()).equal(40);

    })
    
});

