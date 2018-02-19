var creds = require('./credentials.js');

exports.config = {
    
    user: creds.user,
    key: creds.key,
    
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        //
        browserName: 'firefox'
    }],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: ['sauce'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd'
    },

    before: function (capabilities, specs) {
        var chai = require('chai');
        global.expect = chai.expect;
    },
}
