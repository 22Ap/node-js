console.log("Anupam Kumar");
const http = require('http');
const port = 3020;
const hostname = '0.0.0.0';  // Change localhost to 0.0.0.0

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Node Server created by Anupam Kumar');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
