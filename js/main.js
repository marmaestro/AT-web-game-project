let game = new Phaser.Game(GAME_AREA_WIDTH, GAME_AREA_HEIGHT, Phaser.CANVAS, 'gameArea');

function startGame() {
    game.state.add('startScreen', startScreen);
    game.state.add('aboutScreen', aboutScreen);
    game.state.add('stageA', stageA);
    game.state.add('stageB', stageB);
    game.state.add('stageC', stageC);
    game.state.add('HUD', HUD);
    game.state.add('endScreen', endScreen);

    game.state.start('startScreen');
}

window.onload = startGame;