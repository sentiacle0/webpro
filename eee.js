http = require('http');
sql = require('mysql');
exp = require('express');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('hiii');
}).listen(8080);