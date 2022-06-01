/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFull API to monitor up or down time user defined links
 * Author: Niamul Chowdhury
 * Date: 28/05/2022
 *
 */

// dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');
const { handleReqRes } = require('./helpers/handleReqRes');

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
// start the server

app.createServer();
