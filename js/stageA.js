let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}

const nOWPs = 5; // must be defined from the JSON
const maxFly = 4;
const maxBeetle = 1;
const maxMoth = 0;

let typist = new Typist();
let owps; // the group that contains all enemies currently on the screen

function loadStageA() {
    loadStages();
}

function createStageA() {
    game.world.removeAll();
    // background
    let BG = game.add.image(0, 0, "bg");
    BG.scale.setTo(1.8); //will be modified in the future

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

function collision() {
    goToHUDScreen();
}

function goToHUDScreen() {
    game.state.start('HUD');
}