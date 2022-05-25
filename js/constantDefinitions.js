// game constants ————————————————————————————————————————————
const GAME_AREA_WIDTH = 600;
const GAME_AREA_HEIGHT = 900;

// typist sprite size ————————————————————————————————————————
const SPRITE_FROG_WIDTH = 90;
const SPRITE_FROG_HEIGHT= 92;

// enemy sprtie sizes ————————————————————————————————————————
const SPRITE_FLY_WIDTH = 24;
const SPRITE_FLY_HEIGHT = 29;
const SPRITE_BEETLE_WIDTH = 31;
const SPRITE_BEETLE_HEIGHT = 35;
const SPRITE_MOTH_WIDTH = 50;
const SPRITE_MOTH_HEIGHT = 21;

// game angles ———————————————————————————————————————————————
const RADIANS_TO_DEGREES = 180 / Math.PI;
const ENEMY_SPRITE_LEFT_ANGLE = 90;
const HALF_TRIANGLE_ANGLES_SUM = 90;
const MAX_ANGLE_DEVIATION = 10;

// lengths of the arrays in the dictionary JSON ——————————————
const ARRAY_FLY = 604;
const ARRAY_BEETLE = 376;
const ARRAY_MOTH = 0;

// rate at which replicators and generators execute ———————————
const REPLICATION_RATE = 10000;
const FAN_GENERATION_RATE = 15000;

// other constants ————————————————————————————————————————————
const WORD_OFFSET = 5;
const BUTTON_OFFSET_Y = 100; // gap between the buttons in the start screen
const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';


// create the game ————————————————————————————————————————————
let game = new Phaser.Game(GAME_AREA_WIDTH, GAME_AREA_HEIGHT, Phaser.CANVAS, 'gameArea');