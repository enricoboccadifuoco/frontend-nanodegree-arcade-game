/**
 * Game configuration
 *
 */
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

        // you can choose your favourire sprite
        selectedSprite: 0
    },

    tile: {
        w: 101,
        h: 80
    },

    coin: {
        sprite: 'images/coin.png',
        value: 1000
    },

    // collision between player and enemy delta
    deltaCollision: 40,

    // number of enemies
    enemiesNumber: 1
};

/**
 * scoreUpdate event
 *
 */
var scoreUpdate = new Event('scoreUpdate');

/**
 * Game object
 *
 */
var Game = {

    score: 0,

    // game start timestamp
    gameStarts: new Date().getTime(),

    // number of coins collected
    coinEarned: 0,

    /**
     * Update score, depends on: coin value, current timestamp and game starts timestamp, number of enemies
     *
     */
    setScore: function () {
        this.score += parseInt( config.coin.value / ( ( (new Date().getTime() - this.gameStarts) / 1000 ) % 60) ) * config.enemiesNumber;
        this.updateCoinEarned();
        document.dispatchEvent(scoreUpdate);
    },

    /**
     * Update coin earned
     *
     */
    updateCoinEarned: function () {
        this.coinEarned++;

        if (this.coinEarned === allCoins.length) {
            this.gameOver();
        }
    },

    /**
     * Stops game and prints "Game over" message and score
     *
     */
    gameOver: function () {
        var self = this;

        setTimeout(function(){
            window.cancelAnimationFrame(window.requestId);

            ctx.font = "40pt Impact";
            ctx.textAlign = "center";
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 3;

            ctx.fillText("Game over", document.querySelector("canvas").width / 2, 200);
            ctx.strokeText("Game over", document.querySelector("canvas").width / 2, 200);

            ctx.font = "30pt Impact";
            ctx.fillText("score: " + self.score, document.querySelector("canvas").width / 2, 250);
            ctx.strokeText("score: " + self.score, document.querySelector("canvas").width / 2, 250);

        }, 100);
    },

    /**
     * Reset score and points
     *
     */
    resetScore: function () {
        allCoins.forEach(function(coin) {
            coin.revertLastPosition();
        });

        this.coinEarned = 0;
        this.score = 0;
        this.gameStarts = new Date().getTime();
        document.dispatchEvent(scoreUpdate);
    }
}

/**
 * On score update, prints score in input #score
 *
 * @method last
 *
 */
document.addEventListener('scoreUpdate', function (e) {
    document.querySelector("#score").value = Game.score;
}, false);

/**
 * Return the last item of array
 *
 * @method last
 *
 */
Array.prototype.last = function() {
    return this[this.length -1];
};
