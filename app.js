// Load require modules
var http = require('http');
var fs = require('fs');
var path = require('path');


var server = http.createServer(function (request, response) {
    // Reading file as streams of data
    var readableStream = fs.createReadStream('./big.file', {encoding: 'utf-8'});

    // Getting a chunk of data
    readableStream.on('data', function (chunk) {
        console.log('chunk');
        console.log(chunk);
        response.write(chunk);
    });

    // Recieving end event on completion of reading file
    readableStream.on('end', function () {
        console.log('File Ended');
        response.end();
    });
});

server.listen(8000, function(){
    console.log("server started at 8000");
});
