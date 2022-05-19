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

    wordsUsed = [];
}

function readWaveInfo(w) {

    numberFlies = levelData[w - 1].owpsTypes.flies;
    numberBeetles = levelData[w - 1].owpsTypes.beetles;
    numberMoths = levelData[w - 1].owpsTypes.moths;

    waveSpeed = levelData[w - 1].owpsSpeed;
    waveAppeareanceRate = levelData[w - 1].appearanceRate;
}


//————————————————————————————————————————————————————————————
//--------OWPs------------------------------------------------
//————————————————————————————————————————————————————————————

function createOWP(type) {
    let owp = new Enemy(randomX(type), randomY(type), type);
    owp.sprite = game.add.sprite(owp.x, owp.y, type /*, frame*/);
    owp.configEnemySprite();
    owps.push(owp);
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
//--------AUXILIAR FUNCTIONS----------------------------------
//————————————————————————————————————————————————————————————

function getRandomBetween(min, max) { // random between min and max (both included)
    return Math.random() * ((max + 1) - min) + min;
}

function displayGameOver() {
    let gameOverText = game.add.text(GAME_AREA_WIDTH / 2, GAME_AREA_HEIGHT / 2,
                    'GAME OVER', { font: 'Source Sans Pro', fontSize: '60px' } );
    gameOverText.anchor.setTo(0.5, 0.5);
}

function getAngleDeviation() {
    let angleDeviationSign = 1;
    if (Math.random() < 0.5)
        angleDeviationSign = -1;
    let angleDeviationValue = Math.random() * MAX_ANGLE_DEVIATION;
    return angleDeviationValue * angleDeviationSign;
}