function readKeyboard(e) {
    if(e.keyCode >= Phaser.Keyboard.A
    && e.keyCode <= Phaser.Keyboard.Z) {
        checkLetter(e.key);
        typedLetters++;
    }
}

function checkLetter(a) {

    if (activeOWP) {
        if (isNextLetterInOWP(a)) { }
    }

    else {
        for (var i = 0; i < owps.list.length; i++) {
            let owp = owps.list[i];
            if (isNextLetterInOWP(a, owp))  {
                typist.refocusTypist(owp);
            }
        }
    }
}

function isNextLetterInOWP(a, obj = activeOWP) {

    if(a == obj.word[activeLetter]) {
        activeOWP = obj;
        correctLetters++
        if (!deactivateLetter(obj))
            return null;
        return true;
    }
    return false;
}

function deactivateLetter(obj) {

    obj.deactivateLetter(activeLetter);

    if(activeLetter < obj.word.length - 1) {
        activeLetter++;

    } else {
        activeOWP = null;
        activeLetter = 0;
        obj.deleteOWP();
        proceedWave();
        return null;
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