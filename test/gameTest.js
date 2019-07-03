

describe("Game", function () {

    it("can roll a gutter game", function (){
        var game = new Game();
        for (var i = 0; i < 20; i++){
            game.throws(0)
        }
        expect(game.playerScore()).equal("you need lessons");
    }
);
   

});

