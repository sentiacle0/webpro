var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World!');
}).listen(8080);


var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(req.url);
res.end();
}).listen(8080);

var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
if (err) throw err;
console.log('Saved!');
});

var url = require('url');
var add = 'https://localhost:8080/ball?name=bigger?age=69';
var result = url.parse(add, true);

console.log(result.host);
console.log(result.path);
console.log(result.search);