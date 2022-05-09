let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}

function loadStageA() {
    loadStages();
}

function createStageA() {
    // background
    game.add.image(0, 0, 'bg').setOrigin(0, 0);

    createOWPs(nOWPs);
    createSounds();
    createExplosions(EXPLOSIONS_GROUP_SIZE);

    // for reading the keyboard
    game.input.keyboard.onDownCallback = readKeyboard();

    // arcade phisics and collisions
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable([typist, owps]);
    typist.body.onCollide = new Phaser.Signal();
    typist.body.onCollide.add(collision, this);
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