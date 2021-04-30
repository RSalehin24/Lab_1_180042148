const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.write("<h1>Hello</h1>");
    res.end();
});

server.listen(7777);