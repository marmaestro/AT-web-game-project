let HUD = {
    preload: loadHUD,
    create: createHUD
}

let accuracy;

let death;

let color = 'white';

function loadHUD() {
    game.load.image('bg', 'assets/imgs/background.png');
}

function createHUD() {

    game.world.removeAll();
    game.add.image(-1, -1, "bg");

    let infoText;

    if (death) {
        infoText = game.add.text(WORD_OFFSET + 5, WORD_OFFSET, 'YOU DIED ON WAVE ' + (wave), { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold' } );
        infoText.addColor(color, 0);
    } else {
        infoText = game.add.text(WORD_OFFSET + 5, WORD_OFFSET, 'WAVE ' + (wave - 1) + ' FINISHED', { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold' } );
        infoText.addColor(color, 0);
    }

    infoText = game.add.text(WORD_OFFSET + 5, 15 * WORD_OFFSET, 'ACCURACY: ' + calculateAccuracy().toFixed(2) + '%', { font: 'Source Sans Pro', fontSize: '40px', fontWeight: 'bold' } );
    infoText.addColor(color, 0);

    infoText = game.add.text(WORD_OFFSET + 5, 25 * WORD_OFFSET, 'TYPED LETTERS: ' + typedLetters, { font: 'Source Sans Pro', fontSize: '25px' } );
    infoText.addColor(color, 0);

    infoText = game.add.text(WORD_OFFSET + 5, 31 * WORD_OFFSET, 'CORRECT LETTERS: ' + correctLetters, { font: 'Source Sans Pro', fontSize: '25px' } );
    infoText.addColor(color, 0);

    infoText = game.add.text(WORD_OFFSET + 5, 41 * WORD_OFFSET, "Press 'SPACE' to go continue", { font: 'Source Sans Pro', fontSize: '20px' } );
    infoText.addColor(color, 0);

    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.onDownCallback = readSpace;
}

function calculateAccuracy() {
    return (correctLetters / typedLetters) * 100;
}