//refactor to simplify


describe("Game", function () {

    var game;

    beforeEach(function(){
        game = new Game();
    })

    it("can score a gutter game", function (){
        throwGame(0, 20);
        expect(game.playerScore()).equal(0);
    }
);
    it("can score a game of sixes", function () {
        throwGame(3, 20);
        expect(game.playerScore()).equal(60);

    });

    it("can score a game with a spare bonus", function () {
        game.throws(5)
        game.throws(5)
        game.throws(4)
        game.throws(2);
        throwGame(0,16)
        expect(game.playerScore()).equal(20)
    })


    function throwGame(pins, throws ) {
        for (var i = 0; i< throws; i++) {
           game.throws(pins);
            
        }
    }

});