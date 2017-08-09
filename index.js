var EventEmitter = require("events").EventEmitter, a = new EventEmitter;
a.on("event", function(){
    console.log("event called");
});
a.emit("event");

var fs = require('fs');
fs.stat('/etc/passwd', function(err, stats) { console.dir(stats);
});
