import { Express } from "express";

const app= Express();
const PORT = 5000;
app.listen(PORT,()=>console.log(`Server has been started at ${PORT }`))


// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);