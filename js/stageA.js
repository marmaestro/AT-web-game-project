let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}
var dictionary;
var wavesA;
var wavesB;
var wavesC;

let typist = new Typist();
let owps; // the group that contains all enemies currently on the screen

let wordsUsed = [];

let wave;

let nOWPs = 5; // must be defined from the JSON
let nFly = 0;
let maxFly = 5;
let nBeetle = 0;
let maxBeetle = 0;
let nMoth = 0;
let maxMoth = 0;

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

function loadStageA() {
    game.load.text('waveA', 'assets/json/stageA.json');
    loadStages();
}

function createStageA() {
    game.world.removeAll();

    levelData = JSON.parse(this.game.cache.getText('wavesA'));
    dictionary = JSON.parse(this.game.cache.getText('dictionary'));

    // background
    game.add.image(-1, -1, "bg");

    typist.sprite = this.add.sprite(typist.x, typist.y, 'frog' /*, frame*/);
    typist.configTypistSprite();

    owps = game.add.group();
    owps.inputEnableChildren = true;
    createOWPs(nOWPs);

    createSounds();
    createExplosions(EXPLOSIONS_GROUP_SIZE);

    // for reading the keyboard
    game.input.keyboard.onDownCallback = readKeyboard;
}

function updateStageA() {
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