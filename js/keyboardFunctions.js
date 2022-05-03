let activeOWP;
let typed = 0;
let correct = 0;


function readKeyboard(e) {
    if(e.keyCode >= Phaser.Keyboard.A
    && e.keyCode <= Phaser.Keyboard.Z) {
        checkLetter(e);
        typed++;
    }
}

function checkLetter(e) {
    if (isNextLetterInOWP(e)) { //check if the letter typed is the correct one
        deactivateLetter(); //deactivate said letter if true
        correct++;
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
    return (correct / typed) * 100;
}