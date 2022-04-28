//public variables within the file
let btnCredits;
let btnStart;

let aboutScreen = {
    preload: preloadAbout,
    create: createAbout
};

function preloadAbout() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('frog', 'assets/imgs/frog.png');
    game.load.image('back', 'assets/imgs/return.png');
    game.load.image('credits', 'assets/imgs/credits.png');
    game.load.image('about', 'assets/imgs/about.png');
}

function createAbout() {

    let BG = game.add.image(0, 0, 'bg');
    BG.scale.setTo(1.8);

    //text describing the game (Ab-out)
    let titleAb = 'FROG TYPING GAME';
    let style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '40px'
    }
    let mainTitle = game.add.text(0, 0, titleAb, style);
    mainTitle.anchor.setTo(0.5, 0);
    mainTitle.position.setTo(GAME_AREA_WIDTH/2, 50);

    let textAb = 'Welcome to the frog typing game.\n';
    textAb += 'In this game you will play as this frog\n';
    textAb += 'to practice speed at typing in English.\n';
    textAb += 'Feed the frog to win!\n';
    style = {
        font: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: '20px',
        align: 'center'
    }
    let introduction = game.add.text(0, 0, textAb, style);
    introduction.anchor.setTo(0.5, 0);
    introduction.position.setTo(GAME_AREA_WIDTH/2, 95);

    let imgFrog = game.add.image(GAME_AREA_WIDTH/2, 210, 'frog');
    imgFrog.anchor.setTo(0.5, 0);
    imgFrog.scale.setTo(0.5);


    //text and images explaining the game (A-bout T-utorial)
    let titleAT = 'HOW TO PLAY';
    style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '30px'
    }
    let titleTutorial = game.add.text(0, 0, titleAT, style);
    titleTutorial.anchor.setTo(0.5, 0);
    titleTutorial.position.setTo(GAME_AREA_WIDTH/2, 355);

    let textAT = 'This game has simple controls. Type\n';
    textAT += 'the words that appear on the screen to\n';
    textAT += 'eat the insects.\n';
    textAT += '\n';
    textAT += 'On levels B and C you can also move\n';
    textAT += 'your mouse left and right to avoid\n';
    textAT += 'being hit.\n';
    textAT += '\n';
    textAT += "Make sure to not get hit or you'll die, and\n";
    textAT += 'be careful with the bigger ones: they will\n';
    textAT += 'summon new enemies to attack you!\n';
    textAT += '\n';
    textAT += 'Each level will have waves that you will\n';
    textAT += 'have to survive to continue playing.\n';
    style = {
        font: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: '20px',
        align: 'center'
    }
    let tutorial = game.add.text(0, 0, textAT, style);
    tutorial.anchor.setTo(0.5, 0);
    tutorial.position.setTo(GAME_AREA_WIDTH/2, 395);


    //button for showing credits
    btnCredits = game.add.button(20, 20, 'credits', showCredits);
    btnCredits.anchor.setTo(0.5, 0.5);
    btnCredits.position.setTo(GAME_AREA_WIDTH/2, 790);

    //button for going  back to the start screen
    btnStart = game.add.button(20, 20, 'back', clickBackToStart);
    btnStart.position.setTo(10, 10);
}

function showCredits() {
    let BG = game.add.image(0, 0, 'bg');
    BG.scale.setTo(1.8);

    //credits of the images used and the programing (A-bout C-redits)
    let titleAC = 'CREDITS';
    let style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '40px'
    }
    let titleCredits = game.add.text(10, 5, titleAC, style);
    titleCredits.anchor.setTo(0.5, 0);
    titleCredits.position.setTo(GAME_AREA_WIDTH/2, 200);

    let textAC = 'This game has been created by\n';
    textAC += '\n';
    textAC += 'ANDROMEDA TEAM\n';
    textAC += 'Sergio Angulo Gómez\n';
    textAC += 'Alex González Beltrán\n';
    textAC += 'Marta Maestro Momparler\n';
    textAC += '\n';
    textAC += 'for the Design and Development\n';
    textAC += 'of Web Games course.\n';
    textAC += '\n';
    textAC += '\n';
    textAC += 'All the art on this game has been\n';
    textAC += 'created by @brgfx.\n';
    style = {
        font: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: '20px',
        align: 'center'
    }
    let credits = game.add.text(10, 50, textAC, style);
    credits.anchor.setTo(0.5, 0);
    credits.position.setTo(GAME_AREA_WIDTH/2, 260);

    //button for showing about
    btnCredits = game.add.button(20, 20, 'about', createAbout);
    btnCredits.anchor.setTo(0.5, 0.5);
    btnCredits.position.setTo(GAME_AREA_WIDTH/2, 790);

    //button for going  back to the start screen
    btnStart = game.add.button(20, 20, 'back', clickBackToStart);
    btnStart.position.setTo(10, 10);
}

function clickBackToStart() {
    btnStart.inputEnabled = false;
    game.state.start('startScreen');
}