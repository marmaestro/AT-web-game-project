class Enemy {
    constructor (x, y, speed, type, word) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.type = type;

        let spriteEnemy = game.add.sprite(this.x, this.y, type);
        spriteEnemy.anchor.setTo(0.5, 0.5);
        this.sprite = spriteEnemy;

        this.angle;
        this.sprite.angle = this.angle;
        this.angle = this.angle - formula(typist.x, typist.y, this.x, this.y);

        this.word = word;
        this.word.forEach(letter => { letter.color = black; });
    }

    formula (xt, yt, xe, ye) {
        let angle = 90;
        angle + Math.tan(Math.abs(xt-xe)/Math.abs(yt-ye));
        angle + this.randomAngle();
        return angle;
    }

    randomAngle () {
        return Math.random() * (10 - (-10)) + min;
    }
}