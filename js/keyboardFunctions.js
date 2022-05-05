let activeOWP;
let typedLetters = 0;
let correctLetters = 0;


function readKeyboard(e) {
    if(e.keyCode >= Phaser.Keyboard.A
    && e.keyCode <= Phaser.Keyboard.Z) {
        checkLetter(e);
        typedLetters++;
    }
}

function checkLetter(e) {
    if (isNextLetterInOWP(e)) { //check if the letter typed is the correct one
        deactivateLetter(); //deactivate said letter if true
        correctLetters++;
    }
}

/*function processLetter(item, pointer) {
    item.destroy(); // frees up memory
    // kill() removes it from display list,
    // but not from the group
}*/

function isNextLetterInOWP(e) {

    return true;
}

function deactivateLetter() { //deactivates the correctly-typed letter in the OWP

}





function calculateAccuracy() {
    return (correctLetters / typedLetters) * 100;
}