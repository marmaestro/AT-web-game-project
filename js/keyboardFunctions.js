let activeOWP;
let activeLetter = 0; // index number of the active letter in the OWP (from 0)
let typedLetters = 0;
let correctLetters = 0;
let accuracy;


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
        game.enemies.array.forEach(owp => {
            if (isNextLetterInOWP(a, owp))  { correctLetters++; }
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
    obj.word.changeColour(activeLetter); //this depends on the class declaration

    if(activeLetter < obj.word.length()) {
        if (!activeOWP) { activeOWP = obj; }
        activeLetter++;

    } else {
        removeOWP(obj);
        activeOWP = null;
        activeLetter = 0;
    }
}

function removeOWP(obj) {
    obj.deleteOWP(); // needs revision
    // after the enemy class is finished
}

function calculateAccuracy() {
    return (correctLetters / typedLetters) * 100;
}