/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Niamul Chowdhury
 * Date: 04/06/2022 (DD/MM/YYYY)
 *
 */
// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        Message: 'This is a sample URL',
    });
};

module.exports = handler;
