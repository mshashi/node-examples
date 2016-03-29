'use strict';

var RUNNING_PORT = 3000; //Port that we listen to

var http = require('http'); //Built in http module for Http Server and Client functionality

var fs = require('fs'); //File system module

http.createServer(function(req,res){
getTitles(req,res);
}).listen(RUNNING_PORT,"localhost");

function getTitles(req,res){
fs.readFile('./titles.json',function(err,data){
if(err){
	hadError(err,res);
}else{
var titles = JSON.parse(data.toString());
getTemplate(titles,res);
}
});
};

function getTemplate(titles, res){
fs.readFile('./template.html',function(err,data){
if(err){
	hadError(err,res);
}else{
	var template = data.toString();
	formatHtml(titles,template,res);
}
});
};

function formatHtml(titles,template,res){
var html = template.replace('%',titles.join('</li><li>'));
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(html);
};

function hadError(err,res){
console.log(err);
	res.end('server error');
};


