const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url =="/"){
        res.write("<h1> This is Base URL</h1>");
        res.end();
    } else if(req.url == "/home") {
        res.write("<h1> This is the home page</h1>");
        res.end();
    } else {
        res.write("<h1> This page doesn't exist</h1>");
        res.end();
    }
    /*res.writeHead(201, {"Content-Type" : "text/plain"});
    res.write("<h1>Hello</h1>");
    res.end();*/
});

module.exports = {server};