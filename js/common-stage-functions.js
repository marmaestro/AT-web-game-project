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

function pointEnemyTowardsTypist(enemy, typist) {
    let enemyVX = typist.x - enemy.x;
    let enemyVY = typist.y - enemy.y;
    let enemyAngle = Math.atan2(enemyVY, enemyVX) * RADIANS_TO_DEGREES;
    enemyAngle += getAngleDeviation();
    enemy.sprite.angle = enemyAngle + ENEMY_SPRITE_LEFT_ANGLE;
}

function configureEnemyMovement(enemy) {
    enemy.sprite.body.velocity.x = enemy.speed * Math.sin(angle/RADIANS_TO_DEGREES);
    enemy.sprite.body.velocity.y = enemy.speed * Math.cos(angle/RADIANS_TO_DEGREES);
}

//————————————————————————————————————————————————————————————
//--------TYPIST----------------------------------------------
//————————————————————————————————————————————————————————————

function pointToCurrentEnemy(enemy) {
    typist.sprite.angle = HALF_TRIANGLE_ANGLES_SUM - enemy.sprite.angle;
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


//————————————————————————————————————————————————————————————
//--------AUXILIAR FUNCTIONS----------------------------------
//————————————————————————————————————————————————————————————

function getRandomBetween(min, max) { // random between min and max (both included)
    return Math.random() * ((max + 1) - min) + min;
}

function getAngle(x1, y1, x2, y2) { // angle for the obj on (x1,y1) to face (x2,y2)
    return Math.tan(Math.abs(x1-x2)/Math.abs(y1-y2));;
}

function getAngleDeviation() {
    let angleDeviationSign = 1;
    if (Math.random() < 0.5)
        angleDeviationSign = -1;
    let angleDeviationValue = Math.random() * MAX_ANGLE_DEVIATION;
    return angleDeviationValue * angleDeviationSign;
}