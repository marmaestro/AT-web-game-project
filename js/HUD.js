let HUD = {
    preload: loadHUD,
    create: createHUD
}

let accuracy;

function loadHUD() {
    game.load.image('bg', 'assets/imgs/background.png');
}

function createHUD() {
    accuracy = calculateAccuracy();
}

function calculateAccuracy() {
    return (correctLetters / typedLetters) * 100;
}