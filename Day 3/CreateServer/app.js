const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.write('<h4>Hello World !</h4>');
    res.write(req.url);
    res.end();
}).listen(8080);