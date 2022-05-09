//————————————————————————————————————————————————————————————
//--------LOADING STAGES--------------------------------------
//————————————————————————————————————————————————————————————

function loadStages() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.sprite('frog', 'assets/imgs/frog.png');
    game.load.sprite('fly', 'assets/imgs/fly.png');
    game.load.sprite('beetle', 'assets/imgs/beetle.png');
    game.load.sprite('moth', 'assets/imgs/moth.png');
}

function initiateVariables() {
    typedLetters = 0;
    correctLetters = 0;
}

//————————————————————————————————————————————————————————————
//--------OWPs------------------------------------------------
//————————————————————————————————————————————————————————————

function createOWPs(number) {
    owps = game.add.group();
    // needs more
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