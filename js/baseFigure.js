/**
 * Base figure object
 *
 */
var BaseFigure = function () {

    this.x = 0;
    this.y = 0;

    this.xRange = [];
    this.yRange = [];

    this.sprite = "";
};

/**
 * draw the figure on the screen
 *
 */
BaseFigure.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};