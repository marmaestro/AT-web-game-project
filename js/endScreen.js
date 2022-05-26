let endScreen = {
    preload: loadEndScreen,
    create: createEndScreen
};

function loadEndScreen() {
    game.load.image('bg', 'assets/imgs/background.png');
    //game.load.image('bg', 'assets/imgs/start.png');
}

function createEndScreen() {

    game.add.image(-1, -1, "bg");

    let infoText;

    if (death) {
        infoText = game.add.text(WORD_OFFSET + 5, WORD_OFFSET, 'YOU DIED ON STAGE ' + (stage), { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold' } );
        infoText.addColor(color, 0);
    } else {
        infoText = game.add.text(WORD_OFFSET + 5, WORD_OFFSET, 'STAGE ' + (stage) + ' COMPLETED', { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold' } );
        infoText.addColor(color, 0);
    }

    infoText = game.add.text(WORD_OFFSET + 5, 15 * WORD_OFFSET, 'ACCURACY: ' + calculateAccuracy() + '%', { font: 'Source Sans Pro', fontSize: '40px', fontWeight: 'bold' } );
    infoText.addColor(color, 0);

    infoText = game.add.text(WORD_OFFSET + 5, 25 * WORD_OFFSET, 'TYPED LETTERS: ' + typedLetters, { font: 'Source Sans Pro', fontSize: '25px' } );
    infoText.addColor(color, 0);

    infoText = game.add.text(WORD_OFFSET + 5, 31 * WORD_OFFSET, 'CORRECT LETTERS: ' + correctLetters, { font: 'Source Sans Pro', fontSize: '25px' } );
    infoText.addColor(color, 0);

    //button for going  back to the start screen
    btnStart = game.add.button(20, 20, 'start', clickBackToStart);
    btnStart.anchor.setTo(0.5, 0.5);
    btnStart.position.setTo(GAME_AREA_WIDTH/2, 790);
}

function calculateAccuracy() {
    return ((correctLetters / typedLetters) * 100).toFixed(2);
}