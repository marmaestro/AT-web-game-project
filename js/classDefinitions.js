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
        this.sprite.angle;

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    }

    refocusTypist(owp) {
        this.sprite.angle = HALF_TRIANGLE_ANGLES_SUM - owp.sprite.angle + 90;
    }

    resetTypist() {
        this.sprite.angle = 0;
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

        this.timer = null;

        if (type == 'beetle') {
            this.timer = game.time.events.loop(REPLICATION_RATE, this.replicate, this);
        }
        else if (type == 'moth') {
            this.timer = game.time.events.loop(FAN_GENERATION_RATE, this.fanGenerate, this);
        }
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

            case '':
                while(!foundWord) {
                    word = '' +  CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length)).toString();
                    if (word && !wordsUsed.includes(word) && !lettersUsed.includes(word[0])) {
                        foundWord = true;
                        wordsUsed.push(word);
                        lettersUsed.push(word[0]); }
                } break;

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

        if (this.timer) { game.time.events.remove(this.timer); }

        let i = wordsUsed.indexOf(this.word);
        wordsUsed.splice(i, 1);
        i = lettersUsed.indexOf(this.word[0]);
        lettersUsed.splice(i, 1);

        owps.remove(this);
        //displayExplosion(this.x, this.y);

        typist.resetTypist();
        deactivatedOWPs++;

        this.sprite.destroy();
        this.text.destroy();
    }

    deactivateLetter (l) {
        this.text.clearColors();
        this.text.addColor('#F5F0E4', 0);
        this.text.addColor('#ABA8A2', l + 1);
    }

// special OWP methods —————————————————————————————————————

    replicate() {
        console.log('Replicating an OWP.');
        let offset = SPRITE_BEETLE_HEIGHT / 2 + 10;
        let x = this.sprite.x + (WORD_OFFSET * 5 * this.randomNumber(-1, 1));
        let y = this.sprite.y + offset + 10;

        let owp = new Enemy(x, y, 'fly');
        owp.sprite = game.add.sprite(owp.x, owp.y, 'fly' /*, frame*/);
        owp.configEnemySprite();
        owps.add(owp);
    }

    fanGenerate() {

        let n = this.randomNumber(6, 10);
        console.log('Fan-generating', n, 'letters.');
        let offset = SPRITE_MOTH_HEIGHT / 2 + 10;

        for (var i = 0; i < n; i++) {

            let x = this.sprite.x;
            if (i % 2 == 0) {
                x = x - (20 * i);
            } else {
                x = x + (20 * i);
            } let y = this.sprite.y + offset + (4 * (n - i));

            let owp = new Enemy(x, y, '');
            owp.sprite = game.add.sprite(owp.x, owp.y, 'fly' /*, frame*/);
            owp.configEnemySprite();
            owps.add(owp);
        }
    }


}