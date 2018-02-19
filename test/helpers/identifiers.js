// helper functions around identification by platform/browser

const fs = require('fs');

module.exports = {
    
    mkdir: function(dirPath) {
        // make directory, ignoring "already exists" errors
        // used for screenshot folders
        try {
            fs.mkdirSync(dirPath);
        } catch (err) {
            if (err.code !== 'EEXIST') throw err;
        }
    },
    
    folder: function() {
        var folder = "";
        // os/platform and browser/browsername.
        // separate because folders for screenshots have to be made separately
        if (browser.desiredCapabilities.os) {
            folder = browser.desiredCapabilities.os;
        } else if (browser.desiredCapabilities.platform) {
            folder = browser.desiredCapabilities.platform;
        } else if (browser.desiredCapabilities.platformName) {
            folder = browser.desiredCapabilities.platformName;
        }
        if (folder !== "" && (browser.desiredCapabilities.browser || browser.desiredCapabilities.browserName)) {
            folder += "-";
        }
        if (browser.desiredCapabilities.browser) {
            folder += browser.desiredCapabilities.browser;
        } else if (browser.desiredCapabilities.browserName) {
            folder += browser.desiredCapabilities.browserName;
        }
        folder = folder.replace(/ /g, '-');
        if (folder === "") { folder = "other"; }
        return folder;
    },
    
    identifier: function() {
        // if set: os version, device, browser version, timestamp
        var id = "";
        if (browser.desiredCapabilities.os_version) {
            id += 'OS' + browser.desiredCapabilities.os_version + '-';
        }
        if (browser.desiredCapabilities.browser_version) {
            id += 'B' + browser.desiredCapabilities.browser_version + '-';
        } else if (browser.desiredCapabilities.version) {
            id += 'B' + browser.desiredCapabilities.version + '-';
        }
        if (browser.desiredCapabilities.device) {
            id += browser.desiredCapabilities.device + '-';
        }
        id += Date.now();
        id = id.replace(/ /g, '-');
        return id;
    },
    
    // android has issues with finding things out of the viewport
    // but scrolling isn't universal so we need to scope out desktop
    // and may as well ignore iOS which doesn't have problems
    isAndroid: function() {
        // various places this has shown up for me in capabilities code
        var bN = browser.desiredCapabilities.browserName,
        pN = browser.desiredCapabilities.platformName,
        justP = browser.desiredCapabilities.platform;
        
        if ((bN && bN.toLowerCase() === "android") || (pN && pN.toLowerCase() === "android") || (justP && justP.toLowerCase() === "android")) {
            return true;
        } else {
            return false;
        }
    },
}
