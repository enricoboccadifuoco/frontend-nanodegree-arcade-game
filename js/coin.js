var Coin = function(x, y) {
    BaseFigure.call(this);

    this.x = x;
    this.y = y;
    this.sprite = config.coin.sprite;
}

Coin.prototype = Object.create(BaseFigure.prototype);

Coin.prototype.update = function () {
    if (this.x === player.x && this.y === player.y) {
        this.x = -100;
        this.y = -100;

        config.score+=10;
    }
}