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

// lengths of the arrays in the dictionary JSON
const ARRAY_FLY = 604;
const ARRAY_BEETLE = 376;
const ARRAY_MOTH = 0;

const characters ='abcdefghijklmnopqrstuvwxyz';

let game = new Phaser.Game(GAME_AREA_WIDTH, GAME_AREA_HEIGHT, Phaser.CANVAS, 'gameArea');