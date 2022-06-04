/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFull API to monitor up or down time user defined links
 * Author: Niamul Chowdhury
 * Date: 28/05/2022
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');

// app object - module scaffolding
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server

app.createServer();
