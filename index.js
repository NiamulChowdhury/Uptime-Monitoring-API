/*
 * Title: Project Initial file
 * Description: Initial file to start the node server and workers
 * Author: Niamul Chowdhury
 * Date: 10/06/2022 (DD/MM/YYYY)
 *
 */

// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
};

app.init();

// export the app
module.exports = app;
