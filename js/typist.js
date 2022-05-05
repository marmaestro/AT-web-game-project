class Typist {
    constructor() {
        this.x = GAME_AREA_WIDTH / 2;
        this.y = GAME_AREA_HEIGHT - 50;

        let spriteFrog = game.add.sprite(this.x, this.y, 'frog');
        spriteFrog.anchor.setTo(0.5, 0.5);
        this.sprite = spriteFrog;

        this.angle = this.sprite.angle;
    }

    refocusTypist(owp) {
        typist.angle = formula(this.x, this.y, owp.x, owp.y);
    }

    formula(xt, yt, xe, ye) {
        return Math.tan(Math.abs(xt-xe)/Math.abs(yt-ye));
    }
}