let startScreen = {
    preload: loadStartScreen,
    create: createStartScreen,
};

function loadStartScreen() {
    game.load.image('bg', 'assets/imgs/background.png')
    game.load.spritesheet("fly", "assets/imgs/fly.png");

    game.load.image("stageA", "assets/imgs/stageA.png");
    game.load.image("stageB", "assets/imgs/stageB.png");
    game.load.image("stageC", "assets/imgs/stageC.png");
    game.load.image("about", "assets/imgs/about.png");

    game.load.audio('bgmusic', 'assets/snds/music.wav');
}

function createStartScreen() {
    game.add.image(-1, -1, "bg");

    if (music)
        music.stop();
    music = game.add.sound('bgmusic', 0.1, true);
    music.play();

    let style = {font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold'};
    let gameTitle = game.add.text(GAME_AREA_WIDTH / 2, 150, "FROG TYPING GAME", style);
    gameTitle.anchor.setTo(0.5);

    // Position the buttons in the game area
    btnStageA = game.add.button(GAME_AREA_WIDTH / 2, GAME_AREA_HEIGHT / 2,
        "stageA", blurButtons, this);
    btnStageA.anchor.setTo(0.5);
    //scale?
    btnStageB = game.add.button(GAME_AREA_WIDTH / 2, GAME_AREA_HEIGHT / 2 + BUTTON_OFFSET_Y,
        "stageB", blurButtons, this);
    btnStageB.anchor.setTo(0.5);
    //scale?
    btnStageC = game.add.button(GAME_AREA_WIDTH / 2, GAME_AREA_HEIGHT / 2 + 2 * BUTTON_OFFSET_Y,
        "stageC", blurButtons, this);
    btnStageC.anchor.setTo(0.5);
    //scale?

    btnAbout = game.add.button(GAME_AREA_WIDTH / 2, GAME_AREA_HEIGHT / 2 + 3.5 * BUTTON_OFFSET_Y,
        "about", blurButtons, this);
    btnAbout.anchor.setTo(0.5);
    //scale?

    // Fly tween: a fly moving around the game area borders
    let bouncingFly = game.add.sprite(SPRITE_FLY_WIDTH / 2 + FLY_TWEEN_MARGIN,
        GAME_AREA_HEIGHT - SPRITE_FLY_HEIGHT / 2 - FLY_TWEEN_MARGIN, "fly"
        /*, índice que queremos cargar si tenemos una sábana de sprites*/);
    bouncingFly.anchor.setTo(0.5);

    let flyTween = game.add.tween(bouncingFly).to({
            y: SPRITE_FLY_HEIGHT / 2 + FLY_TWEEN_MARGIN
        }, 6000, Phaser.Easing.Linear.None).to({
            angle: 90
        }, 250, Phaser.Easing.Linear.None).to({
            x: GAME_AREA_WIDTH - SPRITE_FLY_HEIGHT / 2 - FLY_TWEEN_MARGIN
        }, 4500, Phaser.Easing.Linear.None).to({
            angle: 180
        }, 250, Phaser.Easing.Linear.None).to({
            y: GAME_AREA_HEIGHT - SPRITE_FLY_HEIGHT / 2 - FLY_TWEEN_MARGIN
        }, 6000, Phaser.Easing.Linear.None).to({
            angle: 270
        }, 250, Phaser.Easing.Linear.None).to({
            x: SPRITE_FLY_HEIGHT / 2 + FLY_TWEEN_MARGIN
        }, 4500, Phaser.Easing.Linear.None).to({
            angle: 360
        }, 250, Phaser.Easing.Linear.None);

    flyTween.loop(true);
    flyTween.start();
}

function goToAboutScreen() {
    game.state.start('aboutScreen');
}

function blurButtons(btn) {
    createButtonsBlurring();
    determineNextState(btn);
    startButtonsBlurring();
}

function createButtonsBlurring() {
    btnStageABlurring = game.add.tween(btnStageA).to({
        alpha: 0
    }, 1500, Phaser.Easing.Linear.None);
    btnStageBBlurring = game.add.tween(btnStageB).to({
        alpha: 0
    }, 1500, Phaser.Easing.Linear.None);
    btnStageCBlurring = game.add.tween(btnStageC).to({
        alpha: 0
    }, 1500, Phaser.Easing.Linear.None);
    btnAboutBlurring = game.add.tween(btnAbout).to({
        alpha: 0
    }, 1500, Phaser.Easing.Linear.None);
}

function determineNextState(btn) {
    switch (btn) {
        case btnStageA:
            btnStageABlurring.onComplete.add(goToStageA, this);
            break;
        case btnStageB:
            btnStageBBlurring.onComplete.add(goToStageB, this);
            break;
        case btnStageC:
            btnStageCBlurring.onComplete.add(goToStageC, this);
            break;
        default:
            btnAboutBlurring.onComplete.add(goToAboutScreen, this);
            break;
    }
}

function startButtonsBlurring() {
    btnStageABlurring.start();
    btnStageBBlurring.start();
    btnStageCBlurring.start();
    btnAboutBlurring.start();
}

function goToStageA() {
    stage = 'A';
    initiateVariablesStart();
    game.state.start('stageA');
}

function goToStageB() {
    stage = 'B';
    initiateVariablesStart();
    game.state.start('stageB');
}

function goToStageC() {
    stage = 'C';
    initiateVariablesStart();
    game.state.start('stageC');
}