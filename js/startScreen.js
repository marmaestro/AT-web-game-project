let startScreen = {
    preload: loadStartScreen,
    create: createStartScreen,
};
//Variable definitions: assets (sounds, sprites, etc)

function loadStartScreen() {
    //load assets with game.load.asset(parameter1, parameter2, etc)
    game.load.spritesheet("fly", "./assets/imgs/fly.png");
    // load the elements that will work as the buttons to change to other states
}

function createStartScreen() {
    //initialise assets on the game screen: set their locations, scales, rotations, tweens, etc
    // Create the tween that makes the fly move around the borders of the game area
    let bouncingFly = game.add.sprite(0, GAME_AREA_HEIGHT /* - altura del sprite*/, "fly"
        /*, índice que queremos cargar si tenemos una sábana de sprites*/);
    bouncingFly.anchor.setTo(0.5, 0.5);

    let flyTween = game.add.tween(bouncingFly).to({
            y: 0
        }, 4500, Phaser.Easing.Linear.None)
        .to({
            angle: 90
        }, 250, Phaser.Easing.Linear.None)
        .to({
            x: GAME_AREA_WIDTH /* - altura del sprite */
        }, 4500, Phaser.Easing.Linear.None)
        .to({
            angle: 90
        }, 250, Phaser.Easing.Linear.None)
        .to({
            y: GAME_AREA_HEIGHT
        }, 4500, Phaser.Easing.Linear.None)
        .to({
            angle: 90
        }, 250, Phaser.Easing.Linear.None)
        .to({
            x:0
        }, 4500, Phaser.Easing.Linear.None)
        .to({
            angle: 90
        }, 250, Phaser.Easing.Linear.None);
    flyTween.loop(true);
    flyTween.start();

}

function goToAboutScreen() {
    game.state.start("aboutScreen");
}

function goToStageA() {
    game.state.start("stageA");
}

function goToStageB() {
    // game.state.start("stageB");
}