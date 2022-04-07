let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}
/*
Variable definitions: assets (sounds, sprites, etc), groups such as the enemies, OWP class (the
enemies, which are flies, moths, beetle), etc. We may create a class called Enemy, which will be
inherited by the classes Fly, Moth and Beetle. It is the Frog a class too? In this stage, we'll
only need Fly and Moth. Beetle will be needed for the stage B code.
*/
function loadStageA() {
    /*
    load the assets that will appear during the game (background, enemies, typer, explosions
    effects, etc) and the JSON files containing the configuration of the waves, among other
    stuff
    */
}

function createStageA() {
    /*
    create the typer on the game screen. There will be no enemies at the beggining. In this
    function, the events handlers are also configured
    */
}

function updateStageA() {
    /*
    move the enemies based on ther properties (direction, angle...)
    detect any collision with the player and the borders. If an enemy touches the game area limit
    it must bounce
    detect events (keyboard letters). The letter has to be compared with the letter a user needs
    to predd to kill a fly if no fly has been targeted yet
    generate new enemies, with ther corresponding configuration (direction, angle, etc). These
    enemies must not begin with the same letter
    */
}

function goToHUDScreen() { //We'll probably only need one single HUD screen for A, B and C
    //a wave has been finished and its results are shown to the player
}