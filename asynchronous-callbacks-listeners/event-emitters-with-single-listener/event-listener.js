var EventEmitter = require('events').EventEmitter;

var channel = new EventEmitter();

channel.on('join', function (user) {
    console.log("Welcome..." + user);
});

channel.on('bye', function () {
    console.log("bye bye...");
});


var i = 1;
setInterval(function () {
    channel.emit('join', "user" + i++);
}, 2000);

setInterval(function () {
    channel.emit('bye');
}, 6000);