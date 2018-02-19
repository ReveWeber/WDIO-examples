// sample config file for testing with Browserstack
// comments and unused hooks removed for readability

var browserstack = require('browserstack-local');
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

    commonCapabilities: {
        'project': 'myProjectName',
        'browserstack.debug': true,
        'browserstack.video': false,
        'browserstack.local': true
    },

    capabilities: [
      // I add the platform for Android devices if not already there so I can target it
      {
        'device': 'Samsung Galaxy S8',
        'os_version': '7.0',
        'platform': 'Android'
      },
      {
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Chrome',
        'browser_version': '62.0',
        'resolution': '1024x768'
      }
    ],

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

    services: ['browserstack'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd'
    },

    onPrepare: function (config, capabilities) {
        console.log("Connecting local");
        return new Promise(function(resolve, reject){
          exports.bs_local = new browserstack.Local();
          exports.bs_local.start({'key': exports.config.key }, function(error) {
            if (error) return reject(error);
            console.log('Connected. Now testing...');
            resolve();
          });
        });
    },

    before: function (capabilities, specs) {
        var chai = require('chai');
        global.expect = chai.expect;
    },

    onComplete: function(exitCode, config, capabilities) {
        exports.bs_local.stop(function() {});
    }
}

// add common Browserstack settings to each device/browser
exports.config.capabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
