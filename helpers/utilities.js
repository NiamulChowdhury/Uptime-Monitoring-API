/*
 * Title: Utilities
 * Description: Important utility functions
 * Author: Niamul Chowdhury
 * Date: 07/06/2022
 *
 */

// dependencies
const crypto = require('crypto');
const evvironments = require('./environments');

// module scaffolding
const utilities = {};

// parse JSON string to object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// hash string
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', evvironments.secretKey).update(str).digest('hex');

        return hash;
    }
    return false;
};

// export module
module.exports = utilities;
