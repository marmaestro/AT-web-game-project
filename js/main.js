const GAME_AREA_WIDTH = 500;
const GAME_AREA_HEIGHT = 800;

let game;

// remember to attach the corresponding script in the HTML file through the cdnjs extension
let wconfig = {
    active: startGame(),
    google: {
        // fonts loaded from google
        families: []
    },
    custom: {
        // fonts loaded from other resources
        families: [],
        urls: []
    }
}

function startGame() {
    game = new Phaser.Game(GAME_AREA_WIDTH, GAME_AREA_HEIGHT, Phaser.CANVAS, "gameArea");

    game.add.state("startScreen", startScreen);
    game.add.state("aboutScreen", aboutScreen);
    game.add.state("stageA", stageA);

    game.state.start("startScreen");
}
