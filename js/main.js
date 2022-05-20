// the game is created in constantDefinitions.js

// remember to attach the corresponding script in the HTML file through the cdnjs extension
/*let wconfig = {
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
}*/

function startGame() {
    game.state.add('startScreen', startScreen);
    game.state.add('aboutScreen', aboutScreen);
    game.state.add('stageA', stageA);
    game.state.add('HUD', HUD);

    game.state.start('startScreen');
}

//entry point
window.onload = startGame;