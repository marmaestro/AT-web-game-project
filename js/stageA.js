let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}

function loadStageA() {
    loadStages();
}

function createStageA() {
    createSounds();
    createExplosions(EXPLOSIONS_GROUP_SIZE);
}

function updateStageA() {

}

function goToHUDScreen() {
    game.state.start('HUD');
}