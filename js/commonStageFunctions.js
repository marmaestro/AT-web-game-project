//————————————————————————————————————————————————————————————
//--------LOADING STAGES--------------------------------------
//————————————————————————————————————————————————————————————

function loadStages(s) {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('frog', 'assets/imgs/frog.png');
    game.load.image('fly', 'assets/imgs/fly.png');
    game.load.image('beetle', 'assets/imgs/beetle.png');
    game.load.image('moth', 'assets/imgs/moth.png');
    game.load.text('dictionary', 'assets/json/dictionary.json');
    game.load.text('waves' + s, 'assets/json/stage' + s + '.json');
}

function initiateVariablesStart() {
    game.world.removeAll();

    typedLetters = 0;
    correctLetters = 0;

    deactivatedOWPs = 0;

    wave = 1;

    game.time.reset();

}

function initiateVariables() {
    death = false;

    wordsUsed = new Array();
    lettersUsed = new Array();
    owps = new Phaser.ArraySet();
}

function readWaveInfo(w) {
    console.log('Loading wave', w, 'of stage',stage, '.');

    numberFlies = levelData[w - 1].owpsTypes.flies;
    numberBeetles = levelData[w - 1].owpsTypes.beetles;
    numberMoths = levelData[w - 1].owpsTypes.moths;

    waveSpeed = levelData[w - 1].owpsSpeed;
    waveAppeareanceRate = levelData[w - 1].appearanceRate;

    waveLimit = levelData.length;
}


//————————————————————————————————————————————————————————————
//--------OWPs------------------------------------------------
//————————————————————————————————————————————————————————————

function createOWP(type) {
    let owp = new Enemy(randomX(type), randomY(type), type);
    owp.sprite = game.add.sprite(owp.x, owp.y, type /*, frame*/);
    owp.configEnemySprite();
    owps.add(owp);
}

function randomX(type) {
    let min = getSpriteSize(type)[0] / 2 + 5; // 5 pixels for margin
    let max = GAME_AREA_WIDTH - min + 1; // max is exclusive
    return Math.random() * (max - min) + min;
}

function randomY(type) {
    let min = getSpriteSize(type)[1] / 2 - 10;
    let max = getSpriteSize(type)[1] + 15;
    return Math.random() * (max - min) + min;
}

function getSpriteSize(type) {
    switch (type) {
        case 'fly':
            return [SPRITE_FLY_WIDTH, SPRITE_FLY_HEIGHT];
        case 'beetle':
            return [SPRITE_BEETLE_WIDTH, SPRITE_BEETLE_HEIGHT];
        case 'moth':
            return [SPRITE_MOTH_WIDTH, SPRITE_MOTH_HEIGHT];
        default:
            return;
    }
}

function checkOut() {

    for (var i = 0; i < owps.list.length; i++) {
        let owp = owps.list[i];
        if (owp.sprite.top > GAME_AREA_HEIGHT)
            owp.deleteOWP();
    }
}

// OWPS for
/*for (var i = 0; i < owps.list.length; i++) {
    let owp = owps.list[i];
}*/

//————————————————————————————————————————————————————————————
//--------TYPIST----------------------------------------------
//————————————————————————————————————————————————————————————

function checkCollision() {

    for (var i = 0; i < owps.list.length; i++) {
        game.physics.arcade.overlap(typist.sprite, owps.list[i].sprite, collision);
    }
}

//————————————————————————————————————————————————————————————
//--------AUXILIAR FUNCTIONS----------------------------------
//————————————————————————————————————————————————————————————

function getRandomBetween(min, max) { // random between min and max (both included)
    return Math.random() * ((max + 1) - min) + min;
}

function getAngleDeviation() {
    let angleDeviationSign = 1;
    if (Math.random() < 0.5)
        angleDeviationSign = -1;
    let angleDeviationValue = Math.random() * MAX_ANGLE_DEVIATION;
    return angleDeviationValue * angleDeviationSign;
}

function collision() {
    death = true;
    goToHUDScreen();
}

function goToHUDScreen() {
    game.state.start('HUD');
}

function proceedWave() {
    if (owps.list.length <= 0) {
        if (wave++ < waveLimit) {
            goToHUDScreen();
        } else goToHUDScreen();
    }
}

function getTime() {
    seconds = game.time.totalElapsedSeconds();
    let minutes = Math.floor(seconds / 60);
    let secondsToShow = (seconds % 60).toFixed(2);
    return String(minutes).padStart(2, '0') + ':' + String(secondsToShow).padStart(5, '0');
}