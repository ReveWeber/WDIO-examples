describe("Trying out WDIO to make sure it works", function() {
    it ('should get to Google and take a screenshot', function() {
        browser.url('https://www.google.com');
        browser.saveScreenshot('setup/' + browser.desiredCapabilities.browserName + 'googlehome.png');
        expect(false, 'but at least this was called').to.be.true;
    });
});
