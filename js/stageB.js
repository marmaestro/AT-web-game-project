let stageB = {
    preload: loadStageB,
    create: createStageB,
    update: updateStageB
}


//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

function loadStageB() {
    loadStages('B');
}

function createStageB() {
    // set the background image
    game.add.image(-1, -1, "bg");

    // load the json files
    dictionary = JSON.parse(this.game.cache.getText('dictionary'));
    levelData = JSON.parse(this.game.cache.getText('wavesB'));

    // load info for the wave
    initiateVariables();
    readWaveInfo(wave);

    // for reading the keyboard
    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.onDownCallback = readKeyboard;

    // create the typist's sprite and configure it
    typist.sprite = game.add.sprite(typist.x, typist.y, 'frog' /*, frame*/);
    typist.configTypistSprite();

    // timers to create the OWPs
    game.time.events.repeat(waveAppeareanceRate, numberFlies, createOWP, this, 'fly');
    game.time.events.repeat(waveAppeareanceRate * 2, numberBeetles, createOWP, this, 'beetle');
    game.time.events.repeat(waveAppeareanceRate * 3, numberMoths, createOWP, this, 'moth');

    game.input.mspointer.pointerMoveCallback = moveTypist;
}

function updateStageB() {
    checkCollision();
    moveWords();
}