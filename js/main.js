const GAME_AREA_WIDTH = 600;
const GAME_AREA_HEIGHT = 900;
const SPRITE_FLY_WIDTH = 23; // 226 * 0.1 aproximately
const SPRITE_FLY_HEIGHT = 28; // 279 * 0.1 aproximately

let game = new Phaser.Game(GAME_AREA_WIDTH, GAME_AREA_HEIGHT, Phaser.CANVAS, 'gameArea');

let typist = new Typist();

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
    game.state.add('startScreen', startScreen);
    game.state.add('aboutScreen', aboutScreen);
    game.state.add('stageA', stageA);
    game.state.add('HUD', HUD);

    game.state.start('startScreen');
}

//entry point
window.onload = startGame;