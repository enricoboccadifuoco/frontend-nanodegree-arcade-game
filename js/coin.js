/**
 * Coin object
 *
 */
var Coin = function (x, y) {
    BaseFigure.call(this);

    this.x = [x];
    this.y = [y];

    this.sprite = config.coin.sprite;
};

/**
 * Draw coin on screen
 *
 */
Coin.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x.last(), this.y.last());
};

/**
 * Remove the coin when the player passes
 *
 */
Coin.prototype.update = function () {
    if (this.x.last() === player.x && this.y.last() === player.y) {
        this.newPosition(-100, -100);

        Game.setScore();
    }
};

/**
 * Update coin position
 *
 */
Coin.prototype.newPosition = function (x, y) {
    this.x.push(x);
    this.y.push(y);
};

/**
 * Removes the last position added
 *
 */
Coin.prototype.revertLastPosition = function () {
    if (this.x.length > 1) {
        this.x.pop();
    }

    if (this.y.length > 1) {
        this.y.pop();
    }
};