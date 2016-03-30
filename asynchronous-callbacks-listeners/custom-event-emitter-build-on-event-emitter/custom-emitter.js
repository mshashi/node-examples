function CustomEmitter(watchDir, processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

var events = require('events')
    , util = require('util');

util.inherits(CustomEmitter, events.EventEmitter);

CustomEmitter.prototype = new events.EventEmitter();


//TOBE Completed