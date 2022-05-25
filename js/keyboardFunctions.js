function readKeyboard(e) {
    if(e.keyCode >= Phaser.Keyboard.A
    && e.keyCode <= Phaser.Keyboard.Z) {
        checkLetter(e.key);
        typedLetters++;
    } return activeOWP;
}

function checkLetter(a) {
    if (activeOWP) {
        nextLetterInOWP(a, activeOWP);
    }

    else {
        for (var i = 0; i < owps.list.length; i++) {
            let owp = owps.list[i];
            activeOWP = nextLetterInOWP(a, owp);
            if (activeOWP) {
                typist.refocusTypist(owp);
                break;
            }
        }
    } return activeOWP;
}

function nextLetterInOWP(a, owp) {
    if (a == owp.word[activeLetter]) {
        activeOWP = owp;
        correctLetters++;
        advanceLetter(owp);
        return activeOWP;
    }
}

function advanceLetter(owp) {
    owp.deactivateLetter(activeLetter);

    if (activeLetter < owp.word.length - 1) {
        activeLetter++;
    } else {
        activeOWP = null;
        activeLetter = 0;
        owp.deleteOWP();
        proceedWave();
        return activeOWP;
    }
}

function readSpace(e) {
    if(e.keyCode ==  Phaser.Keyboard.SPACEBAR) {
        if (wave <= waveLimit && !death) {
            game.state.start('stage' + stage);
        }
        else {
            game.state.start('startScreen');
        }
    }
}