let startScreen = {
    preload: loadStartScreen,
    create: createStartScreen,
};
//Variable definitions: assets (sounds, sprites, etc)

function loadStartScreen() {
    //load assets with game.load.asset(parameter1, parameter2, etc)
}

function createStartScreen() {
    //initialise assets on the game screen: set their locations, scales, rotations, tweens, etc
}

function goToAboutScreen() {
    game.state.start("aboutScreen");
}