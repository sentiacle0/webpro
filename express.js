var http = require('http');
var express = require('express');
var fs = require('fs');

var app = express();

app.get('/readfile', (req, res) => {
    fs.readFile('gay.txt', function (err, data) {
        if (err){
            res.status(500).send('Error reading file');
        }
        else {
            res.send(`File contents: ${data}`);
        }
    });
});

app.get('/writefile', (req, res) => {
    var content = "wassup";
    fs.writeFile('bigger.txt', content, function (err) {
        if (err){
            res.status(500).send('Error reading file');
        }
        else {
            
            res.send(`Written!`);
        }
    });
});

http.createServer(app).listen(8080); 
