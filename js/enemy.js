/**
 * Enemy object, extends BaseFigure (Enemies our player must avoid)
 *
 */
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    BaseFigure.call(this);

    this.xRange = config.enemy.xRange;
    this.startsY = config.enemy.startsY;
    this.speedRange = config.enemy.speedRange;

    this.sprite = config.enemy.sprite;

    this.reset();
};

Enemy.prototype = Object.create(BaseFigure.prototype);

/**
 * Return a random value between startsY values
 *
 * @return number
 *
 */
Enemy.prototype.getRandomY = function () {
    return this.startsY[Math.floor(Math.random() * this.startsY.length)];
};

/**
 * Return a random value between speedRange values
 *
 * @return number
 *
 */
Enemy.prototype.getRandomSpeed = function () {
    return Math.floor(Math.random() * (this.speedRange[1] - this.speedRange[0])) + this.speedRange[0];
};

/**
 * Reset enemy position, with random Y and random speed values
 *
 */
Enemy.prototype.reset = function () {
    this.x = this.xRange[0];
    this.y = this.getRandomY();

    this.speed = this.getRandomSpeed();
};

/**
 * Update the enemy's position, required method for game
 *
 * @param dt, a time delta between ticks
 *
 */
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;

    if (this.x > this.xRange[1]) {
        this.reset();
    }
};