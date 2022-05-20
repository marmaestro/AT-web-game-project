//————————————————————————————————————————————————————————————
//--------TYPIST----------------------------------------------
//————————————————————————————————————————————————————————————

class Typist {
    constructor() {
        this.x = GAME_AREA_WIDTH / 2;
        this.y = GAME_AREA_HEIGHT - SPRITE_FROG_HEIGHT / 2 - 30; // 15 pixels of margin
        this.sprite;

    }

    configTypistSprite() {
        this.sprite.anchor.setTo(0.5, 0.5);
        this.angle = this.sprite.angle - 90;

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    }

    refocusTypist(owp) {
        this.sprite.angle = HALF_TRIANGLE_ANGLES_SUM - owp.sprite.angle;
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
    }

    configEnemySprite() {
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = this.formula(typist.x, typist.y, this.x, this.y);

        this.text = game.add.text(this.x, this.y + WORD_OFFSET, this.word, { font: 'Source Sans Pro', fontSize: '20px' } );

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        game.physics.enable(this.text, Phaser.Physics.ARCADE);

        this.refocusOWP();
        this.configureEnemyMovement();
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
                    if (word && !wordsUsed.includes(word) && !lettersUsed.includes(word[0])) {
                        foundWord = true;
                        wordsUsed.push(word);
                        lettersUsed.push(word[0]); }
                } break;


            case 'beetle':  // 8 to 10 letters
                while(!foundWord) {
                    let index = this.randomNumber(0, ARRAY_BEETLE + 1);
                    word = dictionary.words.beetle[index];
                    if (word && !wordsUsed.includes(word) && !lettersUsed.includes(word[0])) {
                        foundWord = true;
                        wordsUsed.push(word);
                        lettersUsed.push(word[0]); }
                } break;


            case 'moth':    // more than 10 letters
                while(!foundWord) {
                    let index = this.randomNumber(0, ARRAY_MOTH + 1);
                    word = dictionary.words.moth[index];
                    if (word && !wordsUsed.includes(word) && !lettersUsed.includes(word[0])) {
                        foundWord = true;
                        wordsUsed.push(word);
                        lettersUsed.push(word[0]); }
                } break;


            default:
                console.log('NO WORD ?');
        }
        return word;
    }

    refocusOWP () {
        let enemyVX = typist.x - this.x;
        let enemyVY = typist.y - this.y;
        let enemyAngle = Math.atan2(enemyVY, enemyVX) * RADIANS_TO_DEGREES;
        enemyAngle += getAngleDeviation();
        this.sprite.angle = enemyAngle + ENEMY_SPRITE_LEFT_ANGLE;
    }

    configureEnemyMovement() {
        game.physics.arcade.moveToObject(this.sprite, typist.sprite, this.speed);
        game.physics.arcade.moveToObject(this.text, typist.sprite, this.speed);
    }

    formula(xt, yt, xe, ye) {
        let x = Math.abs(xt - xe);
        let y = Math.abs(yt - ye);
        let anglegrade = Math.atan(y / x);
        let anglerad = Math.PI * anglegrade / 180;
        return anglerad;
    }

    randomNumber(min, max) {
        max += 1;
        return Math.floor(Math.random() * (max - min) + min);
    }

    deleteOWP () {
        let i = wordsUsed.indexOf(this.word);
        wordsUsed.splice(i, 1);
        i = lettersUsed.indexOf(this.word[0]);
        lettersUsed.splice(i, 1);

        owps.remove(this);
        //displayExplosion(this.x, this.y);

        this.sprite.destroy();
        this.text.destroy();
    }

    deactivateLetter (l) {
        this.text.addColor('#ABA8A2', 0);
        this.text.addColor('#F5F0E4', l + 1);
    }
}