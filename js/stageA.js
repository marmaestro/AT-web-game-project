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

let nFly;
let maxFly;
let nBeetle;
let maxBeetle;
let nMoth;
let maxMoth;

let waveSpeed;
let waveAppeareanceRate;



//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

function loadStageA() {
    loadStages('A');
}

function createStageA() {
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

    owps = game.add.group();

    //createSounds();
}

function updateStageA() {
    createOWP();
    game.physics.arcade.collide(typist, owps);
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