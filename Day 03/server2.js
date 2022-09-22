const events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log("Welcome to Node JS");
}

eventEmitter.on('bored', myEventHandler);

eventEmitter.emit('bored');