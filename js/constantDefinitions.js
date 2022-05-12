const GAME_AREA_WIDTH = 600;
const GAME_AREA_HEIGHT = 900;

// sprite sizes
const SPRITE_FROG_WIDTH = 90;
const SPRITE_FROG_HEIGHT= 92;
// enemies
const SPRITE_FLY_WIDTH = 24;
const SPRITE_FLY_HEIGHT = 29;
const SPRITE_BEETLE_WIDTH = 31;
const SPRITE_BEETLE_HEIGHT = 35;
const SPRITE_MOTH_WIDTH = 50;
const SPRITE_MOTH_HEIGHT = 21;

// json imports
/*const dictionary = JSON.parse(dictionary);
const wavesA = JSON.parse(stageA);
const wavesB = JSON.parse(stageB);
const wavesC = JSON.parse(stageC);*/


let game = new Phaser.Game(GAME_AREA_WIDTH, GAME_AREA_HEIGHT, Phaser.CANVAS, 'gameArea');