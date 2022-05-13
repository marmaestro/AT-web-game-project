let activeOWP;
let activeLetter = 0; // index number of the active letter in the OWP (from 0)
let typedLetters;
let correctLetters;


function readKeyboard(e) {
    if(e.keyCode >= Phaser.Keyboard.A
    && e.keyCode <= Phaser.Keyboard.Z) {
        checkLetter(e.key);
        typedLetters++;
    }
}

function checkLetter(a) {
    if (activeOWP) {
        if (isNextLetterInOWP(a)) { correctLetters++; }
    } else {
        owps.forEach(owp => {
            if (isNextLetterInOWP(a, owp))  {
                typist.refocusTypist(owp);
                correctLetters++;
            }
        });
    }
}

function isNextLetterInOWP(a, obj) {

    if(a == obj.word[activeLetter]) {
        deactivateLetter(obj);
        return true;
    }
    return false;
}

function deactivateLetter(obj) {
    obj.word.deactivateLetter(activeLetter);

    if(activeLetter < obj.word.length()) {
        if (!activeOWP) { activeOWP = obj; }
        activeLetter++;

    } else {
        removeOWP(obj);
        activeOWP = null;
        activeLetter = 0;
    }
}