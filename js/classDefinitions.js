//————————————————————————————————————————————————————————————
//--------TYPIST----------------------------------------------
//————————————————————————————————————————————————————————————

class Typist {
    constructor() {
        this.x = GAME_AREA_WIDTH / 2;
        this.y = GAME_AREA_HEIGHT - SPRITE_FROG_HEIGHT / 2 - 15; // 15 pixels of margin
        this.sprite;

    }

    configTypistSprite() {
        this.sprite.anchor.setTo(0.5, 0.5);
        this.angle = this.sprite.angle - 90;
    }

    refocusTypist(owp) {
        this.angle = formula(this.x, this.y, owp.x, owp.y);
    }

    formula(xt, yt, xe, ye) {
        return Math.tan(Math.abs(xt-xe)/Math.abs(yt-ye));
    }
}


//————————————————————————————————————————————————————————————
//--------ENEMIES---------------------------------------------
//————————————————————————————————————————————————————————————

class Enemy {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;

        this.sprite;

        this.speed = this.getSpeed();
        this.word = this.getWord();

        class Letter {
            constructor(letter) {
                this.letter = letter;
                this.color = '#000000';
                this.active = true;
            }
        }

        this.letters = [];
        for (i = 0; i < this.word.length; i++) {
            this.letters[i] = new Letter(this.word[i]);
        }
    }

    configEnemySprite() {
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = 180;
        this.sprite.angle = this.formula(typist.x, typist.y, this.x, this.y);
        this.text = game.add.text(this.x, this.y + 5, this.word, { font: 'Source Sans Pro', fontSize: '20px' } );
    }

    getSpeed() {
        return waveSpeed;
    }

    getWord() {
        let word;
        let foundWord = false;
        // switch to diferentiate between types
        switch(this.type) {

            case 'fly':     // 2 to 7 letters
                while(!foundWord) {
                    let index = this.randomNumber(0, ARRAY_FLY + 1);
                    word = dictionary.words.fly[index];
                    if (word && !wordsUsed.includes(word)) { foundWord = true }
                } break;


            case 'beetle':  // 8 to 10 letters
                while(!foundWord) {
                    let index = this.randomNumber(0, ARRAY_BEETLE + 1);
                    word = dictionary.words.beetle[index];
                    if (word && !wordsUsed.includes(word)) { foundWord = true }
                } break;


            case 'moth':    // more than 10 letters
                while(!foundWord) {
                    let index = this.randomNumber(0, ARRAY_MOTH + 1);
                    word = dictionary.words.moth[index];
                    if (word && !wordsUsed.includes(word)) { foundWord = true }
                } break;


            default:
                console.log('EY QUE NO CHUSCA EL GETWORD');
        }
        return word;
    }

    formula(xt, yt, xe, ye) {
        let x = Math.abs(xt - xe);
        let y = Math.abs(yt - ye);
        let angle = Math.tan(x / y);
        angle + this.randomAngle();
        return angle;
    }

    randomAngle() {
        return Math.random() * (11 - (-10)) - 10; // max is eclusive
            // Math.random() * (max - min) + min;
    }

    randomNumber(min, max) {
        max += 1;
        return Math.floor(Math.random() * (max - min) + min);
    }

    changeColor(i) {
        this.letters[i].active = false;
        this.letters[i].color = '#808080'; // grey
    }

    deleteOWP () {
        displayExplosion(this.x, this.y);
        this.kill();

    }
}