//refactor to simplify
describe("Game", function () {

    var game;

    beforeEach(function () {
        game = new Game();
    });

    it("can score a gutter game", function (){
        throwGame(0, 20);
        expect(game.playerScore()).equal(0);
    }
    );
    
    it("can score a game of sixes", function () {
        throwGame(3, 20);
        expect(game.playerScore()).equal(60);

    });

    it("can score a game of nines", function () {
 // 4.5 to show  a thrown combination of 9 pins a frame
        throwGame(4.5, 20);
        expect(game.playerScore()).equal(90);

    });

    it("can score a game with a spare bonus", function () {
        game.throws(5);
        game.throws(5);
        game.throws(4);
        game.throws(2);
        throwGame(0, 16);
        expect(game.playerScore()).equal(20);
    });

    it("can score of all spares", function () {
        throwGame(5, 20);
        game.throws(5);
        expect(game.playerScore()).equal(150);
    });
    it("can score a game with a strike bonus", function () {
        game.throws(10);
        game.throws(5);
        game.throws(4);
        throwGame(0, 17);
        expect(game.playerScore()).equal(28);
    });

    it("can score a game with strike bonus at end of game", function () {
        throwGame(4.5, 18);
        game.throws(10);
        game.throws(2);
        game.throws(3);
        expect(game.playerScore()).equal(96);

    });

    it("can score a perfect game", function () {
        throwGame(10, 12);
        expect(game.playerScore()).equal(300);
    });

    function throwGame(pins, throws) {
        for (var i = 0; i< throws; i++) {
           game.throws(pins);  
        }
    }
});