let HUD = {
    preload: loadHUD,
    create: createHUD
}

function loadHUD() {
    game.load.image('bg', 'assets/imgs/background.png');
}

function createHUD() {

    mouse = null;
    game.add.image(-1, -1, 'bg');

    let infoText;

    if (death) {
        infoText = game.add.text(WORD_OFFSET + 5, WORD_OFFSET, 'YOU DIED ON WAVE ' + (wave - 1), { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold', fill: color  } );
    } else {
        infoText = game.add.text(WORD_OFFSET + 5, WORD_OFFSET, 'WAVE ' + (wave - 1) + ' FINISHED', { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold', fill: color  } );
    }

    infoText = game.add.text(WORD_OFFSET + 5, 15 * WORD_OFFSET, 'SCORE: ' + calculateScore(),  { font: 'Source Sans Pro', fontSize: '40px', fontWeight: 'bold', fill: color  } );

    infoText = game.add.text(WORD_OFFSET + 5, 25 * WORD_OFFSET, 'TIME ELAPSED: ' + getTime(), { font: 'Source Sans Pro', fontSize: '25px', fill: color  } );

    infoText = game.add.text(WORD_OFFSET + 5, 32 * WORD_OFFSET, 'Press SPACE to continue.', { font: 'Source Sans Pro', fontSize: '20px', fill: color  } );

    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.onDownCallback = readSpace;

}

function calculateScore() {
    return (typedLetters * deactivatedOWPs);//.toFixed(2);
}

function readSpace(e) {

    if(e.keyCode ==  Phaser.Keyboard.SPACEBAR) {

        if (wave - 1 == waveLimit || death) {
            game.state.start('endScreen');
        } else {
            game.state.start('stage' + stage);
        }
    }
}