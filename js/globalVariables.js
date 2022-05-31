//————————————————————————————————————————————————————————————
//---CONSTANTS---------------------------------------------
//————————————————————————————————————————————————————————————
// Game dimensions constants —————————————————————————————————
const GAME_AREA_WIDTH = 600;
const GAME_AREA_HEIGHT = 900;

// Typist sprite size ————————————————————————————————————————
const SPRITE_FROG_WIDTH = 90;
const SPRITE_FROG_HEIGHT= 92;

// Enemies sprites sizes —————————————————————————————————————
const SPRITE_FLY_WIDTH = 24;
const SPRITE_FLY_HEIGHT = 29;
const SPRITE_BEETLE_WIDTH = 31;
const SPRITE_BEETLE_HEIGHT = 35;
const SPRITE_MOTH_WIDTH = 50;
const SPRITE_MOTH_HEIGHT = 21;

// Other sprites sizes ————————————————————————————————————————
const SPRITE_BUBBLE_WIDTH = 14; // will be changed once the bubble sprite exists
const SPRITE_BUBBLE_HEIGHT = 14;

// Game angles ————————————————————————————————————————————————
const RADIANS_TO_DEGREES = 180 / Math.PI;
const ENEMY_TOWARDS_RIGHT = 90; // Quantity to be added when configurating each enemy angle
const TRIANGLE_ANGLES_SUM = 180;
const MAX_ANGLE_DEVIATION = 10;

// lengths of the arrays in the dictionary JSON ——————————————
const ARRAY_FLY = 604;
const ARRAY_BEETLE = 376;
const ARRAY_MOTH = 321;

// rate at which replicators and generators execute ———————————
const REPLICATION_RATE = 10000;
const FAN_GENERATION_RATE = 15000;

// animations / sound —————————————————————————————————————————
const ANIM_FPS = 10;

// other constants ————————————————————————————————————————————
const TYPIST_OFFSET = 30;
const WORD_OFFSET = 5;
const BUTTON_OFFSET_Y = 100; // gap between the buttons in the start screen
const FLY_TWEEN_MARGIN = 5;
const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const TIMELAPSE = Phaser.Timer.SECOND;
const HUD_TEXT_COLOR = '#FFFFFF';


//————————————————————————————————————————————————————————————
//--------GLOBAL VARIABLE DEFFINITIONS------------------------
//————————————————————————————————————————————————————————————
// Common variables ——————————————————————————————————————————
let typist;
let owps;
let bubbles;

let deactivatedOWPs;

var dictionary;
var levelData;

let wordsUsed;      // array with the words on screen
let lettersUsed;    // array with the frist letter of wordsUsed

let stage;          // letter to know which stage the game is in

let wave;           // the current wave (from ) to waveLimit)
let waveLimit;      // number of waves in the stage

let numberFlies;    // total flies in the wave
let numberBeetles;  // total beetles in the wave
let numberMoths;    // total moths in the wave
let totalInsects;
let createdInsects;

let waveSpeed;      // the speed at which owps move in the wave
let waveAppeareanceRate; //  the appeareance rate of owps in the wave

let gameTimer;       // the timer that counts the elapsed time during the game
let seconds;

let music;

// Start Screen variables ————————————————————————————————————
let btnStageA;
let btnStageABlurring;
let btnStageB;
let btnStageBBlurring;
let btnStageC;
let btnStageCBlurring;
let btnAbout;
let btnAboutBlurring;

// About Screen variables ————————————————————————————————————
let btnCredits;
let btnStart;

// HUD Screen variables ——————————————————————————————————————
let death;

// Input management ——————————————————————————————————————————
let cursors;
let mouse;

let activeOWP = null;
let activeLetter = 0;   // Index of the active letter in the active OWP

let typedLetters;
let correctLetters;