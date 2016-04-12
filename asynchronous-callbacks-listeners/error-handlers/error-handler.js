var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('message', function (message) {
    console.log(message);
});


//Case1: Here handler is defined

myEmitter.on('error', function (err) {
    console.log('ERROR: ' + err.message);
});

myEmitter.emit('error', new Error('Something is wrong.'));

myEmitter.emit('message', 'Hi John!!');



//Case2: Error is still thrown if there is no error event handler. But stack trace is printed instead of just the error.

//myEmitter.emit('error', new Error('Something is wrong.'));
//
//myEmitter.emit('message', 'Hi John!!');


//Case3: To exit a running program when an uncaught exception occurs
//process.on('uncaughtException', function (err) {
//    console.error(err.stack);
//    process.exit(1);
//});
//
//myEmitter.emit('error', new Error('Something is wrong.'));
//
//myEmitter.emit('message', 'Hi John!!');