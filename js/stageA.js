let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}
var dictionary;
var levelData;

let typist = new Typist();
let owps; // the group that contains all enemies currently on the screen

let wordsUsed = [];

let wave;

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
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.world.removeAll();

    dictionary = JSON.parse(this.game.cache.getText('dictionary'));
    levelData = JSON.parse(this.game.cache.getText('wavesA'));

    initiateVariables();
    readWaveInfo(1); // <- THIS WILL NEED TO BE CALLED SOMEWHERE ELSE

    // for reading the keyboard
    game.input.keyboard.onDownCallback = readKeyboard;

    // background
    game.add.image(-1, -1, "bg");

    typist.sprite = this.add.sprite(typist.x, typist.y, 'frog' /*, frame*/);
    typist.configTypistSprite();

    owps = new Array();

    //createSounds();

    game.time.events.repeat(waveAppeareanceRate, numberFlies, createOWP, this, 'fly');
    //game.time.events.repeat(waveAppeareanceRate, numberBeetles, createOWP, this, 'beetle');
    //game.time.events.repeat(waveAppeareanceRate, numberMoths, createOWP, this, 'moth');

}

function updateStageA() {

}


//————————————————————————————————————————————————————————————
//--------OTHER FUNCTIONS-------------------------------------
//————————————————————————————————————————————————————————————
function collision() {
    goToHUDScreen();
}

function goToHUDScreen() {
    game.state.start('HUD');
}