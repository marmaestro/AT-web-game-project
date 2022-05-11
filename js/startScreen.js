const BUTTON_OFFSET_Y = 100; // Length of the gap between the buttons in the state

let startScreen = {
    preload: loadStartScreen,
    create: createStartScreen,
};
//Variable definitions: assets (sounds, sprites, etc)

function loadStartScreen() {
    game.load.image('bg', '../assets/imgs/background.png')
    game.load.spritesheet("fly", "../assets/imgs/fly.png");
    // Load the images corresponding to the buttons
    // the following route names could change
    game.load.image("stageA", "../assets/imgs/stageA.png");
    game.load.image("stageB", "../assets/imgs/stageB.png");
    game.load.image("stageC", "../assets/imgs/stageC.png");
    game.load.image("about", "../assets/imgs/about.png");
}

function createStartScreen() {
    //initialise assets on the game screen: set their locations, scales, rotations, tweens, etc

    // Add the background image to the screen
    let BG = game.add.image(0, 0, "bg");
    BG.scale.setTo(1.8); //will be modified in the future

    // Add the game title at the top
    let gameTitle = "FROG TYPING GAME";
    let style = {
        font: 'Open Sans',
        fontSize: "35px",
    }
    let title = game.add.text(GAME_AREA_WIDTH / 2, 100, gameTitle, style); //modify the title aligment
    title.anchor.setTo(0.5, 0.5);

    // Position the buttons in the game area
    let btnStageA = game.add.button(GAME_AREA_WIDTH / 2, GAME_AREA_HEIGHT / 2,
        "stageA", goToStageA);
    btnStageA.anchor.setTo(0.5, 0.5);
    //scale?
    let btnStageB = game.add.button(GAME_AREA_WIDTH / 2, GAME_AREA_HEIGHT / 2 + BUTTON_OFFSET_Y,
        "stageB", goToStageB);
    btnStageB.anchor.setTo(0.5, 0.5);
    //scale?
    let btnStageC = game.add.button(GAME_AREA_WIDTH / 2, GAME_AREA_HEIGHT / 2 + 2 * BUTTON_OFFSET_Y,
        "stageC", goToStageC);
    btnStageC.anchor.setTo(0.5, 0.5);
    //scale?

    let btnAbout = game.add.button(GAME_AREA_WIDTH / 2, GAME_AREA_HEIGHT / 2 + 3.5 * BUTTON_OFFSET_Y,
        "about", goToAboutScreen);
    btnAbout.anchor.setTo(0.5, 0.5);
    //scale?

    // Fly tween: a fly just chilling around the game area borders
    let bouncingFly = game.add.sprite(SPRITE_FLY_WIDTH / 2 + 5,
        GAME_AREA_HEIGHT - SPRITE_FLY_HEIGHT - 5, "fly"
        /*, índice que queremos cargar si tenemos una sábana de sprites*/);
    bouncingFly.anchor.setTo(0.5, 0.5);
    bouncingFly.scale.setTo(0.1); // will be deleted soon due to the assets resizing

    let flyTween = game.add.tween(bouncingFly).to({
            y: SPRITE_FLY_HEIGHT / 2 + 5
        }, 4500, Phaser.Easing.Linear.None).to({
            angle: 90
        }, 250, Phaser.Easing.Linear.None).to({
            x: GAME_AREA_WIDTH - SPRITE_FLY_HEIGHT / 2 - 5
        }, 4500, Phaser.Easing.Linear.None).to({
            angle: 180
        }, 250, Phaser.Easing.Linear.None).to({
            y: GAME_AREA_HEIGHT - SPRITE_FLY_HEIGHT / 2 - 5
        }, 4500, Phaser.Easing.Linear.None).to({
            angle: 270
        }, 250, Phaser.Easing.Linear.None).to({
            x: SPRITE_FLY_HEIGHT / 2 + 5
        }, 4500, Phaser.Easing.Linear.None).to({
            angle: 360
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

function goToStageC() {
    // game.state.start("stageC");
}