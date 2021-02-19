const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<b> Hello World</b>');
    res.write('<b> Hello Again</b>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
});
