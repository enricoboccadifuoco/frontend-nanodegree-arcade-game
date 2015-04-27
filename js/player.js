/**
 * Player object, extends BaseFigure
 *
 */
var Player = function () {

    BaseFigure.call(this);

    this.xRange = config.player.xRange;
    this.yRange = config.player.yRange;
    this.sprite = config.player.sprites[config.player.selectedSprite];

    this.reset();
};

Player.prototype = Object.create(BaseFigure.prototype);


/**
 * Reset player position
 *
 */
Player.prototype.reset = function () {
    this.x = config.player.x;
    this.y = config.player.y;
};

/**
 * On game update
 *
 */
Player.prototype.update = function () {
    this.collisionCheck();
};


/**
 * Check player collision and reset the game
 *
 */
Player.prototype.collisionCheck = function () {

    var self = this;

    if (this.y <= player.yRange[0]) {
        Game.resetScore();
        self.reset();
    } else if (this.y >= config.enemy.startsY[0] && this.y <= config.enemy.startsY[config.enemy.startsY.length - 1]) {
        allEnemies.forEach(function (enemy) {

            if (enemy.y === self.y) {
                if (enemy.x >= self.x - config.deltaCollision && enemy.x <= self.x + config.deltaCollision) {
                    Game.resetScore();
                    self.reset();
                }
            }

        });
    }
};

/**
 * Updates player position
 *
 */
Player.prototype.handleInput = function (direction) {

    switch (direction) {
    case "left":
        this.x -= (this.x - config.tile.w < this.xRange[0]) ? 0 : config.tile.w;
        break;

    case "up":
        this.y -= (this.y - config.tile.h < this.yRange[0]) ? 0 : config.tile.h;
        break;

    case "right":
        this.x += (this.x + config.tile.w > this.xRange[1]) ? 0 : config.tile.w;
        break;

    case "down":
        this.y += (this.y + config.tile.h > this.yRange[1]) ? 0 : config.tile.h;
        break;
    }
};