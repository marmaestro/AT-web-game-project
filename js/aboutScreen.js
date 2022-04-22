//public variables within the file
let btnStart

let aboutScreen = {
    preload: preloadAbout,
    create: createAbout
};

function preloadAbout() {
    game.load.image('fly', 'assets/imgs/fly.png');
    game.load.image('beetle', 'assets/imgs/beetle.png');
    game.load.image('moth', 'assets/imgs/moth.png');
    game.load.image('frog', 'assets/imgs/frog.png');
}

function createAbout() {

    //text describing the game (Ab-out)
    let textAb = ',\n';
    textAb += ',\n';
    let styleAb = {};
    let introduction = game.add.text(TEXT_OFFSET_HOR, TEXT_OFFSET_VER, textAb, styleAb);

    //text and images explaining the game (A-bout T-utorial)
    let textAT = ',\n';
    textAT += ',\n';
    let styleAT = {};
    let credits = game.add.text(TEXT_OFFSET_HOR, TEXT_OFFSET_VER, textAT, styleAT);

    let imgFly = game.add.sprite(x, y, 'fly'); //sizes, positions and such will be needed
    let imgBeetle = game.add.sprite(x, y, 'beetle');
    let imgMoth = game.add.sprite(x, y, 'moth');
    let imgFrog = game.add.sprite(x, y, 'frog');

    //button for going  back to the start screen
    btnStart = game.add.button(posX, posY, 'backToSart', clickBackToStart);

    //credits of the images used and the programing (A-bout C-redits)
    let textAC = ',\n';
    textAC += ',\n';
    let styleAC = {};
    let tutorial = game.add.text(TEXT_OFFSET_HOR, TEXT_OFFSET_VER, textA, styleAC);
}

function clickBackToStart() {
    btnStart.inputEnabled = false;
    game.state.start('startScreen');
}