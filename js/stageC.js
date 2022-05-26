let stageC = {
    preload: loadStageC,
    create: createStageC,
    //update: updateStageC
};

function loadStageC() {
    loadStages('C');
}

function createStageC() {
    // set the background image
    game.add.image(-1, -1, "bg");

    // load the json files
    /*dictionary = JSON.parse(this.game.cache.getText('dictionary'));
    levelData = JSON.parse(this.game.cache.getText('wavesB'));

    // load info for the wave
    initiateVariables();
    readWaveInfo(wave);

    // for reading the keyboard
    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.onDownCallback = readKeyboard;

    // create the typist's sprite and configure it
    typist.sprite = game.add.sprite(typist.x, typist.y, 'frog' /*, frame*//*);
    typist.configTypistSprite();

    // timers to create the OWPs
    game.time.events.repeat(waveAppeareanceRate, numberFlies, createOWP, this, 'fly');
    game.time.events.repeat(waveAppeareanceRate * 2, numberBeetles, createOWP, this, 'beetle');
    game.time.events.repeat(waveAppeareanceRate * 3, numberMoths, createOWP, this, 'moth');*/

    let infoText;

    infoText = game.add.text(WORD_OFFSET + 5, WORD_OFFSET, 'WORK IN PROGRESS', { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold' } );
    infoText.addColor(color, 0);

    infoText = game.add.text(WORD_OFFSET + 5, 15 * WORD_OFFSET, 'Please click on the button to go back.', { font: 'Source Sans Pro', fontSize: '20px' } );
    infoText.addColor(color, 0);

    //button for going  back to the start screen
    btnStart = game.add.button(20, 20, 'start', clickBackToStart);
    btnStart.anchor.setTo(0.5, 0.5);
    btnStart.position.setTo(GAME_AREA_WIDTH/2, 790);
}

function updateStageC() {
    checkCollision();
    checkOut();
}