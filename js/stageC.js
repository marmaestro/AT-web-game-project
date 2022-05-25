let stageC = {
    preload: loadStageC,
    create: createStageC,
    //update: updateStageC
};

function loadStageC() {
    loadStages('C');
}

function createStageC() {
    /*// remove all elements and set the background image
    game.world.removeAll();
    game.add.image(-1, -1, "bg");

    // load the json files
    dictionary = JSON.parse(this.game.cache.getText('dictionary'));
    levelData = JSON.parse(this.game.cache.getText('wavesC'));

    // load info for the wave
    initiateVariables();
    readWaveInfo(wave); // <- THIS WILL NEED TO BE CALLED SOMEWHERE ELSE

    // for reading the keyboard
    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.onDownCallback = readKeyboard;

    // create the typist's sprite and configure it
    typist.sprite = game.add.sprite(typist.x, typist.y, 'frog' /*, frame*/ //);
    /*typist.configTypistSprite();

    // timers to create the OWPs
    game.time.events.repeat(waveAppeareanceRate, numberFlies, createOWP, this, 'fly');
    game.time.events.repeat(waveAppeareanceRate * 2, numberBeetles, createOWP, this, 'beetle');
    // unused until the dictionary is completed
    //game.time.events.repeat(waveAppeareanceRate * 3, numberMoths, createOWP, this, 'moth');*/

    game.world.removeAll();
    game.add.image(-1, -1, "bg");

    let infoText;

    infoText = game.add.text(WORD_OFFSET + 5, WORD_OFFSET, 'WORK IN PROGRESS', { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold' } );
    infoText.addColor(color, 0);

    infoText = game.add.text(WORD_OFFSET + 5, 15 * WORD_OFFSET, "Press 'SPACE' to go continue", { font: 'Source Sans Pro', fontSize: '20px' } );
    infoText.addColor(color, 0);

    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.onDownCallback = readSpace;
}

function updateStageC() {
    checkCollision();
    checkOut();
}