/*
 * Title: Routes
 * Description: Application Routes
 * Author: Niamul Chowdhury
 * Date: 04/06/2022
 *
 */
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
