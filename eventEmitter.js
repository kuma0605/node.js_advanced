'use strict';
var fs = require('fs');
var stream = fs.createReadStream('/path/to/large/file');

var content = '';
stream.on('data', function (data) {
    content = content + data;
});

stream.on('end', function () {
    console.log('File content has been retrieved: ' + content);
});

stream.on('error', function(err) {
 console.log('Sad panda: ' + err);
});