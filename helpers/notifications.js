/* eslint-disable operator-linebreak */
/*
 * Title: Notifications library
 * Description: Important functions to notify users
 * Author: Niamul Chowdhury
 * Date: 9/06/2022 (DD/MM/YYYY)
 *
 */

// dependencies
const https = require('https');
const { twilio } = require('./environments');

// Module scaffolding
const notifications = {};

// Send sms to user using twilio api
notifications.sendTwilioSms = (phone, msg, callback) => {
    // input validation
    // Bangladeshi phone number without country code (which is 11 digit) validation
    // eslint-disable-next-line operator-linebreak
    const userPhone =
        // eslint-disable-next-line prettier/prettier
        typeof phone === 'string' &&
        phone.trim().length === 11
            ? phone.trim()
            : false;

    const userMsg =
        // eslint-disable-next-line prettier/prettier
        typeof msg === 'string' &&
        msg.trim().length > 0 &&
        msg.trim().length <= 1600
            ? msg.trim()
            : false;

    if (userPhone && msg) {
        // configure the request payload
        const payload = {
            Body: userMsg,
            From: twilio.fromPhone,
            To: `+88${userPhone}`,
        };

        // stringify the payload
        const stringifyPayload = JSON.stringify(payload);

        // configure the request details
        const requestDetails = {
            hostname: 'api.twilio.com',
            method: 'POST',
            path: `/2010-04-01/Accounts/${twilio.accountSid}/Messages.json`,
            auth: `${twilio.accountSid}:${twilio.authToken}`,
            Headers: {
                'Content-Type': 'application/x-www-from-urlencoded',
            },
        };

        // instantiate the request object
        const req = https.request(requestDetails, (res) => {
            // get the status of the sent request
            const status = res.statusCode;
            // callback successfully if the request went through
            if (status === 200 || status === 201) {
                callback(false);
            } else {
                callback(`Error ${status}`);
            }
        });

        req.on('error', (e) => {
            callback(e);
        });

        req.write(stringifyPayload);
        req.end();
    } else {
        callback('Given parameters wereinvalid!');
    }
};

// export the module
module.exports = notifications;
