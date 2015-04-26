// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

allEnemies = [],
allCoins = [],
player = null;

for (var i = 0; i < config.enemiesNumber; i++) {
    allEnemies.push(new Enemy());
};

for (row = 0; row < config.enemy.startsY.length; row++) {
    for (col = 0; col < 5; col++) {
        allCoins.push(new Coin(col * 101, config.enemy.startsY[row]));
    }
}

player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});