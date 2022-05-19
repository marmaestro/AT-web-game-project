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

function initiateVariables() {
    typedLetters = 0;
    correctLetters = 0;

    nFly = 0;
    nBeetle = 0;
    nMoth = 0;
}

function readWaveInfo(w) {

    maxFly = levelData[w - 1].owpsTypes.flies;
    maxBeetle = levelData[w - 1].owpsTypes.beetles;
    maxMoth = levelData[w - 1].owpsTypes.moths;

    waveSpeed = levelData[w - 1].owpsSpeed;
    waveAppeareanceRate = levelData[w - 1].appearanceRate;
}


//————————————————————————————————————————————————————————————
//--------OWPs------------------------------------------------
//————————————————————————————————————————————————————————————

function createOWP() {
    let type = makeType(nFly, nBeetle, nMoth);
    let owp = new Enemy(randomX(type), randomY(type), type);
    owp.sprite = game.add.sprite(owp.x, owp.y, type /*, frame*/);
    owp.configEnemySprite();
    //owps.add(owp);
    console.log(owp);
}

function makeType(nFly, nBeetle, nMoth) {
    let type;
    if (nFly < maxFly) {
        type = 'fly';
        nFly++;
    } else if (nBeetle < maxBeetle) {
        type = 'beetle';
        nBeetle++;
    } else { // there can never be more moths than defined
        type = 'moth';
        nMoth++;
    } return type;
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

//————————————————————————————————————————————————————————————
//--------AUXILIAR FUNCTIONS----------------------------------
//————————————————————————————————————————————————————————————

function getRandomBetween(min, max) { // random between min and max (both included)
    return Math.random() * ((max + 1) - min) + min;
}

function getAngle(x1, y1, x2, y2) { // angle for the obj on (x1,y1) to face (x2,y2)
    return Math.tan(Math.abs(x1-x2)/Math.abs(y1-y2));;
}