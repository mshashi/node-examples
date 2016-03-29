'use strict';

var RUNNING_PORT = 3000; //Port that we listen to

var http = require('http'); //Built in http module for Http Server and Client functionality

var fs = require('fs'); //File system module

http.createServer(function(req,resp){
if(req.url==='/'){
fs.readFile('./titles.json',function(err,data){
if(err){
	console.log(err);
	resp.end('server error');
}else{
var titles = JSON.parse(data.toString());

fs.readFile('./template.html',function(err,data){
if(err){
	console.log(err);
	resp.end('server error');
}else{
	var tmplate = data.toString();
	var html = tmplate.replace('%',titles.join('</li><li>'));
	resp.writeHead(200,{'Content-Type':'text/html'});
	resp.end(html);
}
});
}
});
}
}).listen(RUNNING_PORT,"localhost");