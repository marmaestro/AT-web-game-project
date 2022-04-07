const GAME_AREA_WIDTH = 800;
const GAME_AREA_HEIGHT = 600;

let game = new Phaser.Game(GAME_AREA_WIDTH, GAME_AREA_HEIGHT, Phaser.CANVAS, "gameArea");

game.add.state("startScreen", startScreen);