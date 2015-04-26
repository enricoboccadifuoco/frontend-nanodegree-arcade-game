var config = {

    enemy: {
        xRange: [-102, 506],
        startsY: [60, 140, 220],
        speedRange: [150, 400],
        sprite: 'images/enemy-bug.png'
    },

    player: {
        x: 202,
        y: 380,
        xRange: [0, 404],
        yRange: [-20, 380],
        sprites: [
            'images/char-boy.png',
            'images/char-cat-girl.png',
            'images/char-horn-girl.png',
            'images/char-pink-girl.png',
            'images/char-princess-girl.png'
        ],
        selectedSprite: 2
    },

    tile: {
        w: 101,
        h: 80
    },

    coin: {
        sprite: 'images/coin.png'
    },

    deltaCollision: 40,
    enemiesNumber: 3,
    score: 0
};

var BaseFigure = function () {

    this.x = 0;
    this.y = 0;

    this.xRange = [];
    this.yRange = [];

    this.sprite = "";
}

// Draw the figure on the screen
BaseFigure.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}