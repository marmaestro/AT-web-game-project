let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}
var dictionary;
var levelData;

let typist = new Typist();
let owps; // the array that contains all enemies currently on the screen

let wordsUsed;
let lettersUsed;

let stage;

let wave;
let waveLimit;

let cursors;

let flies;
let numberFlies;
let numberBeetles;
let numberMoths;

let waveSpeed;
let waveAppeareanceRate;


//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

function loadStageA() {
    loadStages('A');
}

function createStageA() {
    // remove all elements and set the background image
    game.world.removeAll();
    game.add.image(-1, -1, "bg");

    // load the json files
    dictionary = JSON.parse(this.game.cache.getText('dictionary'));
    levelData = JSON.parse(this.game.cache.getText('wavesA'));

    // load info for the wave
    initiateVariables();
    readWaveInfo(wave); // <- THIS WILL NEED TO BE CALLED SOMEWHERE ELSE

    // for reading the keyboard
    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.onDownCallback = readKeyboard;

    // create the typist's sprite and configure it
    typist.sprite = game.add.sprite(typist.x, typist.y, 'frog' /*, frame*/);
    typist.configTypistSprite();

    // timers to create the OWPs
    game.time.events.repeat(waveAppeareanceRate, numberFlies, createOWP, this, 'fly');
    //game.time.events.repeat(waveAppeareanceRate, numberBeetles, createOWP, this, 'beetle');
    //game.time.events.repeat(waveAppeareanceRate, numberMoths, createOWP, this, 'moth');
}

function updateStageA() {

    checkCollision();
    checkOut();

    // change waves or finish the stage
}