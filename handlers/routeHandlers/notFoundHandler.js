/*
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: Niamul Chowdhury
 * Date: 04/06/2022 (DD/MM/YYYY)
 *
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your Requested URL was not found!',
    });
};

module.exports = handler;
