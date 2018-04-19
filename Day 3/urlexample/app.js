const url = require('url');
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var r = url.parse(req.url, true);  
    var jsonObj = r.query; 
    res.write(JSON.stringify(jsonObj));
    res.end();
}).listen(8080);