'use strict';

var RUNNING_PORT = 3000; //Port that we listen to

var http = require('http'); //Built in http module for Http Server and Client functionality

var fs = require('fs'); //File system module

var path = require('path'); //File system path accessability/ related functionality

var mime = require('mime'); //mime module for deriving the mime type based on file extention
var rupee = require('./rupee');

//function sendFile(response, filePath, fileContents) {
//    response.writeHead(200, {
//        'content-tpe': mime.lookup(path.basename(filePath))
//    });
//    response.end(fileContents);
//}
//
//
//
//function serveStatic(response, absPath) {
//    fs.readFile(absPath, function (error, data) {
//        sendFile(response, absPath, data);
//    });
//}
//
//var server = http.createServer(function (request, response) {
//    if (request.url === '/') {
//        serveStatic(response, 'index.html');
//    } else {
//        serveStatic(response, "." +
//            request.url);
//    }
//});
//
//
//server.listen(RUNNING_PORT, function () {
//    console.log("Server started and listening on port " + RUNNING_PORT);
//});

console.log(rupee.convertCurrency('dollar', 'rupee', 223));