//————————————————————————————————————————————————————————————
//--------LOADING STAGES--------------------------------------
//————————————————————————————————————————————————————————————

function loadStages() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('frog', 'assets/imgs/frog.png');
    game.load.image('fly', 'assets/imgs/fly.png');
    game.load.image('beetle', 'assets/imgs/beetle.png');
    game.load.image('moth', 'assets/imgs/moth.png');
}

function initiateVariables() {
    typedLetters = 0;
    correctLetters = 0;
}

//————————————————————————————————————————————————————————————
//--------OWPs------------------------------------------------
//————————————————————————————————————————————————————————————

function createOWPs(number) {
    let nFly = 0;
    let nBeetle = 0;
    let nMoth = 0;
    for (i = 0; i < number; i++) {
        let type = makeType(nFly, nBeetle, nMoth);
        let owp = new Enemy(randomX(type), randomY(type), type);
        owp.sprite = game.add.sprite(owp.x, owp.y, type /*, frame*/);
        owp.configEnemySprite();
    }
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
    let min = getSpriteSize(type)[1] / 2 + 5; // 5 pixels for margin
    let max = GAME_AREA_HEIGHT / 3 + 1; // OWPs should not spawn low in the screen
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
//--------EXPLOSIONS------------------------------------------
//————————————————————————————————————————————————————————————

const EXPLOSIONS_GROUP_SIZE = 30;
let explosions;
let soundExplosion;

function createPlay () {
    createExplosions(EXPLOSIONS_GROUP_SIZE);
}

function createSounds() {
    soundFrog = game.add.audio('sndfrog');
    soundExplosion = game.add.audio('sndexplosion');
}

function createExplosions(number) {
    explosions = game.add.group();
    explosions.createMultiple(number, 'explosion');
    explosions.forEach(setupBlast, this);
}

function setupBlast(explosion) {
    explosion.anchor.setTo(0.5, 0.5);
    explosion.animations.add('explosion');
}

function displayExplosion (obj) {
    let explosion = explosions.getFirstExists(false);
    let x = obj.x;
    let y = obj.y;
    explosion.reset(x, y);
    explosion.play('explosion', 30, false, true);
}