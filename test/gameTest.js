

describe("Game", function () {

    it("can roll a gutter game", function (){
        var game = new Game();
        for (var i = 0; i < 20; i++){
            game.throws(0)
        }
        expect(game.playerScore()).equal(0);
    }
);
    it("can roll a game of twos", function () {
        var game = new Game();
        for (var i = 0; i < 20; i++) {
            game.throws(2)
        }
        expect(game.playerScore()).equal(40);

    })
    
});

