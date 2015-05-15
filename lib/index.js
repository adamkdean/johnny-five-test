var five = require('johnny-five'),
    board = new five.Board();

board.on('ready', function () {
    console.log('board is ready!');

    var led = new five.Led(13);
    led.blink(500);
});
