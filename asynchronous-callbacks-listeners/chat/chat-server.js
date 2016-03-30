var events = require('events');
var net = require('net');


var channel = new events.EventEmitter();

channel.clients = {};
channel.subscriptions = {};
channel.ids = [];


channel.setMaxListeners(4);

channel.on('join', function (id, client) {
    this.clients[id] = client;
    this.subscriptions[id] = function (senderId, message) {
        if (id !== senderId) {
            this.clients[id].write(message);
        }
    };
    this.on('broadcast', this.subscriptions[id]);
});


//Error handler
//channel.on('error', function (err) {
//    console.log("Error: " + err.message);
//});


//Closing the channel
channel.on('leave', function (id) {
    channel.removeListener('broadcast', this.subscriptions[id]);
    channel.emit('broadcast', id, id + " has left the chat. \n");
});


//Shutting down the chat
channel.on('shutdown', function () {
    channel.emit('broadcast', '', "Chat has shut down.\n");
    channel.removeAllListeners('broadcast');
});

var server = net.createServer(function (client) {
    var id = client.remoteAddress + ':' + client.remotePort;
    //TODO: Explain the below logic
    //    client.on('connect', function () {
    channel.ids.push(client.remotePort);
    console.log('User connected: ' + id);
    channel.emit('join', id, client);
    //    });
    client.on('close', function () {
        channel.emit('leave', id);
    });

    client.on('data', function (data) {
        data = data.toString();
        console.log(data);
        if (data === "0") {
            channel.emit('shutdown');
        }
        channel.emit('broadcast', id, data);
    });
});

server.listen(8888);

//Emitting an error.
//channel.emit('error', new Error('You got an error.'));


//setInterval(function () {
//    console.log("Clients existing: " + channel.ids);
//}, 2000);

setInterval(function () {
    console.log("Clients existing: " + channel.listeners('broadcast').length);
}, 2000);