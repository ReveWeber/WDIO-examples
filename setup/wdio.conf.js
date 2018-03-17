exports.config = {
    // after setting up your stack for local testing you should take your main wdio.conf.js file
    // and change the "specs" and "capabilities" arrays to match these
    // (rather than running this file directly, since it won't test your entire setup that way)

    specs: [
        // this path is relative to where you've installed WDIO
        './setup/test.js'
    ],
    maxinstances: 10,
    capabilities: [{
        browserName: 'firefox'
    },
    {
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    bail: 0,
    screenshotPath: './errorShots/',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function (capabilities, specs) {
        var chai = require('chai');
        global.expect = chai.expect;
    },
}
