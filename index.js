/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFull API to monitor up or down time user defined links
 * Author: Niamul Chowdhury
 * Date: 28/05/2022
 *
 */

// dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello World!');
};

// start the server

app.createServer();
