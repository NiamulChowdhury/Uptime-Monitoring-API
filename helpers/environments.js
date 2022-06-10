/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Niamul Chowdhury
 * Date: 04/06/2022 (DD/MM/YYYY)
 *
 */

// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'asfsadgargsdfasdfasdf',
    maxChecks: 5,
    /* twilio: {
        fromPhone: '',
        accountSid: '',
        authToken: '',
    }, */
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'asdfsadfgasfawerfsdg',
    maxChecks: 5,
    /* twilio: {
        fromPhone: '',
        accountSid: '',
        authToken: '',
    }, */
};

// determine which encironment was passed
// eslint-disable-next-line operator-linebreak
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
// eslint-disable-next-line operator-linebreak
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
