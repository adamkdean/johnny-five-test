var five = require('johnny-five'),
    board = new five.Board(),
    multiplier = 5.0 * 11,
    count = 0,
    total = 0,
    voltage, average;

board.on('ready', function () {
    console.log('board is ready!');

    var a0 = new five.Pin('A0');

    a0.read(function (error, value) {
        count++;
        total += value;
        average = total / count;
        voltage = (average / 1024 * multiplier).toFixed(2);

        console.log(voltage);
    });

});
