exports.config = {
    
    specs: [
        './test/specs/**/*.js'
        // './test/specs/pom-rd.js',
        // './test/specs/pom-rw.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        browserName: 'firefox'
        // browserName: 'chrome'
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

    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 20000,
    },

    before: function (capabilities, specs) {
        var chai = require('chai');
        global.expect = chai.expect;
    },
}
