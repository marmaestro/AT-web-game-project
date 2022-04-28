let activeOWP;

function readKeyboard(e) {
    if(e.keyCode >= Phaser.Keyboard.A
    && e.keyCode <= Phaser.Keyboard.Z) {
        checkLetter(e);
    }
}

function checkLetter(e) {
    if(e == activeOWP );
}

function shakeLetters() {
    for (const child of letters.children) {
        child.x += Math.random() * 2 - 1;
        child.y += Math.random() * 2 - 1;
        child.angle += Math.random() * 10 - 5;
    }
}

function processLetter(item, pointer) {
    item.destroy(); // frees up memory
    // kill() removes it from display list,
    // but not from the group
}